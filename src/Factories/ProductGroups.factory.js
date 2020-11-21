import productGroupData from '~/Data/productGroups';
import { ProductGroupModel } from '~/Models/ProductGroup.model';
import { uniqueId } from '~/util/uniqueId';
import { ProductsFactory } from '~/Factories/Products.factory';
import { ImageModel } from '~/Models/Image.model';

export const ProductGroupsFactory = (productGroups) => {
	const selectedProductGroups = productGroupData.filter(productGroup => productGroups.includes(productGroup.name));

	return selectedProductGroups.map((productGroup) => {
		const {
			name, displayName, displayGroupName, description, products, image,
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
		});
	});
};
