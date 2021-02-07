import { types, getRoot, getSnapshot } from 'mobx-state-tree';
import { autorun } from 'mobx';
import delay from 'lodash/delay';
import axios from 'axios';
import React from 'react';

import { ProductModel } from '~/Models/Product.model';
import { OptionGroupModel } from '~/Models/OptionGroup.model';
import { SelectionGroupModel } from '~/Models/SelectionGroup.model';

export const ConfigPageModel = types
	.model('ConfigPageModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ConfigPageModel_') === 0),
		product: types.reference(ProductModel),
		currentOptionGroup: types.maybeNull(types.reference(OptionGroupModel)),
		currentSelectionGroup: types.reference(SelectionGroupModel),
		className: 'Page--config',
	})
	.views(self => ({
		get currentOptionGroupIdx() {
			if (self.optionGroups === null) {
				return -1;
			}
			return self.optionGroups.findIndex(selectionGroup => selectionGroup.name === self.currentOptionGroup.name);
		},
		get currentSelectedOption() {
			if (!self.currentOptionGroup?.options?.length) {
				return {};
			}
			return self.currentOptionGroup.options.find(option => option.selected);
		},
		get currentSelectionGroupIdx() {
			return self.product.selectionGroups.findIndex(selectionGroup => selectionGroup.name === self.currentSelectionGroup.name);
		},
		get isLastOptionGroup() {
			if (!self.optionGroups) {
				return false;
			}
			return self.currentOptionGroupIdx === self.optionGroups.length - 1;
		},
		get isLastSelectionGroup() {
			return self.currentSelectionGroupIdx === self.product.selectionGroups.length - 1;
		},
		get nextOptionGroup() {
			if (self.isLastOptionGroup && self.isLastSelectionGroup) {
				return null;
			}
			if (self.isLastOptionGroup) {
				return self.nextSelectionGroup.optionGroups[0];
			}
			return self.optionGroups[self.currentOptionGroupIdx + 1];
		},
		get nextSelectionGroup() {
			if (self.isLastSelectionGroup) {
				return null;
			}
			return self.product.selectionGroups[self.currentSelectionGroupIdx + 1];
		},
		get optionGroups() {
			return self.currentOptionGroup.selectionGroup.optionGroups;
		},
		get prevOptionGroup() {
			if (!self.currentOptionGroupIdx && !self.currentSelectionGroupIdx) {
				return null;
			}
			if (!self.currentOptionGroupIdx) {
				return self.prevSelectionGroup.optionGroups[self.prevSelectionGroup.optionGroups.length - 1];
			}
			return self.optionGroups[self.currentOptionGroupIdx - 1];
		},
		get prevSelectionGroup() {
			if (!self.currentSelectionGroupIdx) {
				return null;
			}
			return self.product.selectionGroups[self.currentSelectionGroupIdx - 1];
		},
		get showOptionGroupAccordion() {
			return !getRoot(self).isMediaQueryXl;
		},
	}))
	.actions((self) => {
		let mqDispose;

		return {
			afterAttach() {
				const root = getRoot(self);

				mqDispose = autorun(() => {
					const openModalNames = root.openModals.map(modal => modal.name).filter(Boolean);

					if (!openModalNames.length) {
						return;
					}
					root.getOpenModalByName('changeProduct')?.alter?.({
						type: root.isMediaQueryXl ? 'SLIDER' : 'MODAL_TIGHT',
						showCloseBtnText: root.isMediaQueryXl,
					});
					root.getOpenModalByName('changeProductConfirm')?.alter?.({
						type: root.isMediaQueryXl ? 'SLIDER_SECONDARY' : 'MODAL_TIGHT',
						showBackdrop: !root.isMediaQueryXl || openModalNames.length === 1,
						showCloseBtnText: root.isMediaQueryXl,
					});
					root.getOpenModalByName('optionInfoModal')?.alter?.({
						type: root.isMediaQueryXl ? 'SLIDER_TERTIARY' : 'MODAL_TIGHT',
						showCloseBtnText: root.isMediaQueryXl,
					});
				}, { name: 'Auto alters modals based on media queries.' });
			},
			beforeDestroy() {
				mqDispose();
			},
			savePdf() {
				const appStore = getRoot(self);
				const { modals } = appStore;
				const modal = modals.get('modal-primary');
				const selectedProduct = self.product;

				appStore.closeAllModals();
				const snapshot = JSON.stringify(getSnapshot(appStore));

				delay(() => {
					modal.open({
						title: 'Save to PDF',
						type: 'MODAL',
						showCloseBtn: false,
						content: (
							<p className="font-italic text-lg">
								Please wait while we generate a PDF for your configured product…
							</p>
						),
					});
				}, 500);
				axios.request({
					url: '/api/save-pdf',
					method: 'post',
					data: {
						filename: selectedProduct.generatedPdfFilename,
						link: selectedProduct.configLink.as,
						snapshot,
					},
				}).then((response) => {
					// Since save-as dialog cannot be opened from an AJAX request, we do this instead.
					const {
						data: {
							data: {
								Location: href = '',
							} = {},
						} = {},
					} = response;
					const tempLink = document.createElement('a');

					modal.close();
					tempLink.href = href;

					document.body.appendChild(tempLink);
					tempLink.click();
					document.body.removeChild(tempLink);
				});
			},
			setCurrentOptionGroup(optionGroupId) {
				self.currentOptionGroup = optionGroupId;
				self.currentSelectionGroup = self.currentOptionGroup.selectionGroup.id;
			},
			setCurrentSelectionGroup(selectionGroupId) {
				self.currentSelectionGroup = selectionGroupId;
				const { optionGroups } = self.currentSelectionGroup;
				if (!optionGroups.length) {
					return;
				}
				self.currentOptionGroup = optionGroups[0].id || null;
			},
			setProduct(product) {
				const firstOptionGroupId = product?.selectionGroups?.[0]?.optionGroups?.[0]?.id;

				if (!firstOptionGroupId) {
					return;
				}
				self.product = product;
				self.setCurrentOptionGroup(firstOptionGroupId);
			},
		};
	});
