import productGroupData from '~/Data/productGroups';
import { ProductGroupModel } from '~/Models/ProductGroup.model';
import { uniqueId } from '~/util/uniqueId';
import { ProductsFactory } from '~/Factories/Products.factory';

export const ProductGroupsFactory = (productGroups) => {
	const selectedProductGroups = productGroupData.filter(productGroup => productGroups.includes(productGroup.name));

	return selectedProductGroups.map((productGroup) => {
		const {
			name, displayName, description, products,
		} = productGroup;

		return ProductGroupModel.create({
			id: `ProductGroupModel_${uniqueId()}`,
			name,
			displayName,
			description,
			...(products.length) && {
				products: ProductsFactory(products),
			},
		});
	});
};
