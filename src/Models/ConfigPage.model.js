import { types, getRoot } from 'mobx-state-tree';
import { autorun } from 'mobx';

import { ProductModel } from '~/Models/Product.model';

export const ConfigPageModel = types
	.model('ConfigPageModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ConfigPageModel_') === 0),
		product: types.reference(ProductModel),
	})
	.actions((self) => {
		let mqDispose;

		return {
			afterAttach() {
				const root = getRoot(self);

				mqDispose = autorun(() => {
					if (!root.modal) {
						return;
					}
					if (!root.modal.isOpen) {
						return;
					}
					switch (root.modal.name) {
					case 'changeProduct':
						if (root.isMediaQueryXl) {
							root.modal.setType('SLIDER');
							root.modal.setShowCloseBtnText(true);
						} else {
							root.modal.setType('MODAL_TIGHT');
							root.modal.setShowCloseBtnText(false);
						}
						break;
					default:
						break;
					}
				});
			},
			beforeDestroy() {
				mqDispose();
			},
		};
	});
