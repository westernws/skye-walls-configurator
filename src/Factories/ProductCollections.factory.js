import { ProductCollectionModel } from '~/Models/ProductCollection.model';
import { uniqueId } from '~/util/uniqueId';
import { ProductGroupsFactory } from '~/Factories/ProductGroups.factory';
import { ProductsFactory } from '~/Factories/Products.factory';

export const ProductCollectionsFactory = (productCollections) => {
	return productCollections.map((productCollection) => {
		const {
			name, displayName, displayGroupName, description, productGroups = [], products = [],
		} = productCollection;

		return ProductCollectionModel.create({
			id: `ProductCollectionModel_${uniqueId()}`,
			name,
			displayName,
			displayGroupName,
			description,
			productGroups: productGroups?.length ? ProductGroupsFactory(productGroups) : [],
			products: products?.length ? ProductsFactory(products) : [],
		});
	});
};
