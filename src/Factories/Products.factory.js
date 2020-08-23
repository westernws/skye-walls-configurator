import productData from '~/Data/products';
import { ProductModel } from '~/Models/Product.model';
import { uniqueId } from '~/util/uniqueId';
import { OptionGroupsFactory } from '~/Factories/OptionGroups.factory';
import { SelectionGroupsFactory } from '~/Factories/SelectionGroups.factory';
import { ProductImageFactory } from '~/Factories/ProductImage.factory';

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
			selectionGroups = [],
			images,
		} = product;
		const optGroupsModel = OptionGroupsFactory(optionGroups);
		const colorOptionGroup = optGroupsModel.find(optionGroup => optionGroup.name === 'color');
		const colorOptions = colorOptionGroup.options;
		const selectionGroupModels = SelectionGroupsFactory(selectionGroups);
		// debugger;
		const model = ProductModel.create({
			id: `ProductModel_${uniqueId()}`,
			name,
			displayName,
			description,
			inheritedFeatures,
			inheritedFeaturesLong,
			features,
			optionGroups: optGroupsModel,
			selectionGroups: selectionGroupModels,
			images: ProductImageFactory(images, colorOptions),
		});

		return model;
	});
};
