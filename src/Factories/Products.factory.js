import productData from '~/Data/products';
import { ProductModel } from '~/Models/Product.model';
import { uniqueId } from '~/util/uniqueId';
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
			selectionGroups = [],
			images,
		} = product;
		const selectionGroupModels = SelectionGroupsFactory(selectionGroups);
		const colorSelectionGroup = selectionGroupModels.find(sgm => sgm.name === 'color');
		const colorOptionGroup = colorSelectionGroup.optionGroups.find(optionGroup => optionGroup.name === 'color');
		const colorOptions = colorOptionGroup.options;
		// debugger;
		const model = ProductModel.create({
			id: `ProductModel_${uniqueId()}`,
			name,
			displayName,
			description,
			inheritedFeatures,
			inheritedFeaturesLong,
			features,
			selectionGroups: selectionGroupModels,
			images: ProductImageFactory(images, colorOptions),
		});

		return model;
	});
};
