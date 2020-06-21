import { types } from 'mobx-state-tree';

import { ProductCollectionModel } from '~/Models/ProductCollection.model';

export const AppModel = types
	.model('App', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('AppModel_') === 0),
		productCollections: types.array(ProductCollectionModel),
		isModalOpen: false,
	})
	.actions(self => ({
		closeModal() {
			self.isModalOpen = false;
		},
		openModal() {
			self.isModalOpen = true;
		},
	}));
