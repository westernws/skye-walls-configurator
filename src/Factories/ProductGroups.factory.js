import productGroupData from '~/Data/productGroups';
import { ProductGroupModel } from '~/Models/ProductGroup.model';
import { uniqueId } from '~/util/uniqueId';
import { ProductsFactory } from '~/Factories/Products.factory';
import { ImageModel } from '~/Models/Image.model';

export const ProductGroupsFactory = (productGroups) => {
	const selectedProductGroups = productGroupData.filter(productGroup => productGroups.includes(productGroup.name));

	return selectedProductGroups.map((productGroup) => {
		const {
			name, displayName, displayGroupName, description, products, image, animatedImage, reviewImage,
		} = productGroup;

		return ProductGroupModel.create({
			id: `ProductGroupModel_${uniqueId()}`,
			name,
			displayName,
			displayGroupName,
			description,
			...(products.length) && {
				products: ProductsFactory(products),
			},
			image: ImageModel.create({
				id: `ImageModel_${uniqueId()}`,
				aspectRatio: image.aspectRatio,
				basePath: image.basePath,
				fileName: image.fileName,
				width: image.width,
			}),
			animatedImage: ImageModel.create({
				id: `ImageModel_${uniqueId()}`,
				aspectRatio: animatedImage.aspectRatio,
				basePath: animatedImage.basePath,
				fileName: animatedImage.fileName,
				width: animatedImage.width,
			}),
			reviewImage: ImageModel.create({
				id: `ImageModel_${uniqueId()}`,
				aspectRatio: reviewImage.aspectRatio,
				basePath: reviewImage.basePath,
				fileName: reviewImage.fileName,
				width: reviewImage.width,
				useCdn: true,
			}),
		});
	});
};
