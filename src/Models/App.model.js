import { getParentOfType, types } from 'mobx-state-tree';

import { ProductCollectionModel } from '~/Models/ProductCollection.model';
import { ProductGroupModel } from '~/Models/ProductGroup.model';

export const AppModel = types
	.model('AppModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('AppModel_') === 0),
		productCollections: types.array(ProductCollectionModel),
	})
	.actions(() => ({
		getProductLink(product) {
			const href = ['[product]'];
			const as = [];

			try {
				const productGroup = getParentOfType(product, ProductGroupModel);
				as.unshift(`${productGroup.slug}-${product.slug}`);
			} catch (productGroupError) {
				as.unshift(product.slug);
			}
			try {
				const productCollection = getParentOfType(product, ProductCollectionModel);
				href.unshift('[product-collection]');
				as.unshift(productCollection.slug);
			} catch (productCollectionError) {
				// product collection not found, but I do not care to handle it.
			}

			return {
				href: href.join('/'),
				as: as.join('/'),
			};
		},
	}));
