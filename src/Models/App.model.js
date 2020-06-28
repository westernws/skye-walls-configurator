import { types } from 'mobx-state-tree';
import flattenDeep from 'lodash/flattenDeep';

import { ProductCollectionModel } from '~/Models/ProductCollection.model';
import { ModalModel } from '~/Models/Modal.model';

export const AppModel = types
	.model('App', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('AppModel_') === 0),
		productCollections: types.array(ProductCollectionModel),
		modal: ModalModel,
	})
	.views(self => ({
		get activePanelProduct() {
			return self.allProducts.find(product => product.isActive) || {};
		},
		get allProducts() {
			const products = flattenDeep(self.productCollections.map((productCollection) => {
				if (productCollection.productGroups.length) {
					return productCollection.productGroups.map(productGroup => productGroup.products);
				}
				return productCollection.products;
			}));
			return [...new Set(products)];
		},
	}))
	.actions(self => ({
		getProductByName(productName) {
			return self.allProducts.find(product => product.name === productName) || {};
		},
		setActivePanelProduct(product) {
			self.allProducts.forEach(p => p.setIsActive(false));
			if (!product) {
				return;
			}
			product.setIsActive(true);
		},
	}));
