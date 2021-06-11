import productGroupData from '~/Data/productGroups';
import { ProductGroupModel } from '~/Models/ProductGroup.model';
import { ProductsFactory } from '~/Factories/Products.factory';
import { ImageModel } from '~/Models/Image.model';

export const ProductGroupsFactory = (productGroups) => {
	const selectedProductGroups = productGroupData.filter(productGroup => productGroups.includes(productGroup.name));

	return selectedProductGroups.map((productGroup) => {
		const {
			name, displayName, displayGroupName, displayGroupNamePlural, description, products, image, animatedImage,
		} = productGroup;

		return ProductGroupModel.create({
			id: `ProductGroupModel_${name}`,
			name,
			displayName,
			displayGroupName,
			displayGroupNamePlural,
			description,
			...(products.length) && {
				products: ProductsFactory(products),
			},
			image: ImageModel.create({
				id: `ImageModel_${image.fileName}`,
				aspectRatio: image.aspectRatio,
				basePath: image.basePath,
				fileName: image.fileName,
				width: image.width,
			}),
			animatedImage: ImageModel.create({
				id: `ImageModel_${animatedImage.fileName}`,
				aspectRatio: animatedImage.aspectRatio,
				basePath: animatedImage.basePath,
				fileName: animatedImage.fileName,
				width: animatedImage.width,
			}),
		});
	});
};
