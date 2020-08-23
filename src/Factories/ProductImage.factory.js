import { ProductImageModel } from '~/Models/ProductImage.model';
import { uniqueId } from '~/util/uniqueId';

export const ProductImageFactory = (images, colorOptions) => {
	return images.map((image) => {
		const {
			fileName = '',
			width = 0,
		} = image;
		const color = colorOptions.find(option => option.name === image.color);

		return ProductImageModel.create({
			id: `ProductImageModel_${uniqueId()}`,
			color: color.id,
			fileName,
			width,
		});
	});
};
