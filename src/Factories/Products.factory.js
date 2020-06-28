import productData from '~/Data/products';
import { ProductModel } from '~/Models/Product.model';
import { uniqueId } from '~/util/uniqueId';
import { OptionGroupsFactory } from '~/Factories/OptionGroups.factory';

export const ProductsFactory = (products) => {
	const selectedProducts = productData.filter(product => products.includes(product.name));

	return selectedProducts.map((product) => {
		const {
			name,
			displayName,
			description,
			inheritedFeatures = '',
			inheritedFeaturesLong = '',
			features,
			optionGroups = [],
		} = product;

		return ProductModel.create({
			id: `ProductModel_${uniqueId()}`,
			name,
			displayName,
			description,
			inheritedFeatures,
			inheritedFeaturesLong,
			features,
			optionGroups: OptionGroupsFactory(optionGroups),
		});
	});
};
