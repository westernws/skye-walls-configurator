import productData from '~/Data/products';
import { ProductModel } from '~/Models/Product.model';
import { SelectionGroupsFactory } from '~/Factories/SelectionGroups.factory';
import { ProductImageFactory } from '~/Factories/ProductImage.factory';
import { ImageModel } from '~/Models/Image.model';

export const ProductsFactory = (products) => {
	const selectedProducts = productData.filter(product => products.includes(product.name));

	return selectedProducts.map((product) => {
		const {
			name,
			baseImagePath = '',
			displayName,
			description,
			illustrationAnimated = null,
			illustrationStatic = null,
			inheritedFeatures = '',
			inheritedFeaturesLong = '',
			features,
			selectionGroups = [],
			images,
			isVinyl,
		} = product;
		const selectionGroupModels = SelectionGroupsFactory(selectionGroups, name);
		const colorSelectionGroup = selectionGroupModels.find(sgm => sgm.name === 'color');
		const colorOptionGroup = colorSelectionGroup.optionGroups.find(optionGroup => optionGroup.name === 'color');
		const colorOptions = colorOptionGroup.options;
		const handleSelectionGroup = selectionGroupModels.find(sgm => sgm.name === 'handles');
		const handleOptionGroup = handleSelectionGroup.optionGroups.find(optionGroup => optionGroup.name === 'handles');
		const handleOptions = handleOptionGroup.options;
		const model = ProductModel.create({
			id: `ProductModel_${name}`,
			name,
			displayName,
			description,
			illustrationAnimated: illustrationAnimated ? ImageModel.create({
				id: `ImageModel_${name}`,
				alt: illustrationAnimated.alt,
				aspectRatio: illustrationAnimated.aspectRatio,
				basePath: illustrationAnimated.basePath,
				fileName: illustrationAnimated.fileName,
				width: illustrationAnimated.width,
			}) : null,
			illustrationStatic: illustrationStatic ? ImageModel.create({
				id: `ImageModel_${illustrationStatic.fileName}`,
				alt: illustrationStatic.alt,
				aspectRatio: illustrationStatic.aspectRatio,
				basePath: illustrationStatic.basePath,
				fileName: illustrationStatic.fileName,
				width: illustrationStatic.width,
			}) : null,
			inheritedFeatures,
			inheritedFeaturesLong,
			features,
			selectionGroups: selectionGroupModels,
			images: ProductImageFactory(images, colorOptions, baseImagePath, handleOptions),
			isVinyl,
		});

		return model;
	});
};
