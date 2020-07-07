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
					const primaryModal = root.modals.get('modal-primary');

					if (!primaryModal) {
						return;
					}
					if (!primaryModal.isOpen) {
						return;
					}
					switch (primaryModal.name) {
					case 'changeProduct':
						if (root.isMediaQueryXl) {
							primaryModal.setType('SLIDER');
							primaryModal.setShowCloseBtnText(true);
						} else {
							primaryModal.setType('MODAL_TIGHT');
							primaryModal.setShowCloseBtnText(false);
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
