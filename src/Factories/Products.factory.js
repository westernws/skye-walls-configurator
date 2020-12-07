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
			baseImagePath = '',
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
		const handleSelectionGroup = selectionGroupModels.find(sgm => sgm.name === 'handles');
		const handleOptionGroup = handleSelectionGroup.optionGroups.find(optionGroup => optionGroup.name === 'handles');
		const handleOptions = handleOptionGroup.options;
		const model = ProductModel.create({
			id: `ProductModel_${uniqueId()}`,
			name,
			displayName,
			description,
			inheritedFeatures,
			inheritedFeaturesLong,
			features,
			selectionGroups: selectionGroupModels,
			images: ProductImageFactory(images, colorOptions, baseImagePath, handleOptions),
		});

		return model;
	});
};
