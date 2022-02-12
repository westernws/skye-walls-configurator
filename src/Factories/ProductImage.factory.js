import { ProductImageModel } from '~/Models/ProductImage.model';

export const ProductImageFactory = (images, colorOptions, baseImagePath, handleOptions) => {
	return images.map((image) => {
		const {
			alt,
			fileName = '',
			width = 0,
		} = image;
		const color = colorOptions.find(option => option.name === image.color);
		const handle = handleOptions.find(option => option.name === image.handle) || { id: null };

		return ProductImageModel.create({
			id: `ProductImageModel_${color.id}`,
			alt,
			color: color.id,
			handle: handle.id,
			fileName,
			width,
			...(baseImagePath) && {
				basePath: baseImagePath,
			},
		});
	});
};
