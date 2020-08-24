import { types, getRoot } from 'mobx-state-tree';
import { autorun } from 'mobx';

import { ProductModel } from '~/Models/Product.model';
import { OptionGroupModel } from '~/Models/OptionGroup.model';

export const ConfigPageModel = types
	.model('ConfigPageModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ConfigPageModel_') === 0),
		product: types.reference(ProductModel),
		currentOptionGroup: types.reference(OptionGroupModel),
		className: 'Page--config',
	})
	.views(self => ({
		get currentOptionGroupIdx() {
			return self.optionGroups.findIndex(selectionGroup => selectionGroup.name === self.currentOptionGroup.name);
		},
		get currentSelectedOption() {
			if (!self.currentOptionGroup.options?.length) {
				return {};
			}
			return self.currentOptionGroup.options.find(option => option.selected);
		},
		get currentSelectionGroupIdx() {
			return self.product.selectionGroups.findIndex(selectionGroup => selectionGroup.name === self.currentOptionGroup.selectionGroup.name);
		},
		get isLastOptionGroup() {
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
			setCurrentOptionGroup(optionGroupId) {
				self.currentOptionGroup = optionGroupId;
			},
			setProduct(product) {
				const firstOptionGroupId = product?.optionGroups?.[0]?.id;

				if (!firstOptionGroupId) {
					return;
				}
				self.product = product;
				self.setCurrentOptionGroup(firstOptionGroupId);
			},
		};
	});
