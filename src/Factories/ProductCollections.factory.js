import { ProductCollectionModel } from '~/Models/ProductCollection.model';
import { uniqueId } from '~/util/uniqueId';
import { ProductGroupsFactory } from '~/Factories/ProductGroups.factory';
import { ProductsFactory } from '~/Factories/Products.factory';

export const ProductCollectionsFactory = (productCollections) => {
	return productCollections.map((productCollection) => {
		const {
			name, displayName, description, productGroups = [], products = [],
		} = productCollection;

		return ProductCollectionModel.create({
			id: `ProductCollectionModel_${uniqueId()}`,
			name,
			displayName,
			description,
			...(productGroups.length) && {
				productGroups: ProductGroupsFactory(productGroups),
			},
			...(products.length) && {
				products: ProductsFactory(products),
			},
		});
	});
};
