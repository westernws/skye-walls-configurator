import { types, getRoot } from 'mobx-state-tree';
import { autorun } from 'mobx';

import { ProductModel } from '~/Models/Product.model';
import { OptionGroupModel } from '~/Models/OptionGroup.model';

export const ConfigPageModel = types
	.model('ConfigPageModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ConfigPageModel_') === 0),
		product: types.reference(ProductModel),
		currentOptionGroup: types.reference(OptionGroupModel),
	})
	.views(self => ({
		get currentOptionGroupIdx() {
			return self.product.optionGroups.findIndex(optionGroup => optionGroup.name === self.currentOptionGroup.name);
		},
		get nextOptionGroup() {
			if (self.currentOptionGroupIdx === self.product.optionGroups.length) {
				return null;
			}
			return self.product.optionGroups[self.currentOptionGroupIdx + 1];
		},
		get prevOptionGroup() {
			if (!self.currentOptionGroupIdx) {
				return null;
			}
			return self.product.optionGroups[self.currentOptionGroupIdx - 1];
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
				}, { name: 'Auto alters modals based on media queries.' });
			},
			beforeDestroy() {
				mqDispose();
			},
			setCurrentOptionGroup(optionGroupId) {
				self.currentOptionGroup = optionGroupId;
			},
		};
	});
