import { OptionModel } from '~/Models/Option.model';
import { OptionColorModel } from '~/Models/OptionColor.model';
import { OptionEnvironmentModel } from '~/Models/OptionEnvironment.model';
import { EnvironmentImageModel } from '~/Models/EnvironmentImage.model';
import { ImageModel } from '~/Models/Image.model';

// Test
export const OptionsFactory = (options, optionGroupName, productName) => {
	if (optionGroupName === 'color') {
		return options.map(option => OptionColorModel.create({
			id: `OptionColorModel_${productName + option.name}`,
			name: option.name,
			displayName: option.displayName,
			description: option.description || '',
			displayOptionGroupName: option.displayOptionGroupName || '',
			selected: typeof option.selected !== 'undefined',
			hex: option.hex,
		}));
	}
	if (['view', 'floor', 'wall'].includes(optionGroupName)) {
		return options.map(option => OptionEnvironmentModel.create({
			id: `OptionEnvironmentModel_${productName + option.name}`,
			name: option.name,
			description: option.description || '',
			displayName: option.displayName,
			hex: option.hex || '',
			selected: typeof option.selected !== 'undefined',
			image: EnvironmentImageModel.create({
				id: `EnvironmentImageModel_${productName + option.name}`,
				...option.image,
			}),
			...(option.thumb) && {
				thumb: EnvironmentImageModel.create({
					id: `EnvironmentImageModel_${productName + option.name}`,
					...option.thumb,
				}),
			},
		}));
	}
	return options.map(option => OptionModel.create({
		id: `OptionModel_${productName + option.name}`,
		name: option.name,
		description: option.description || '',
		displayName: option.displayName,
		finish: option.finish || '',
		selected: typeof option.selected !== 'undefined',
		...(option.thumb) && {
			thumb: ImageModel.create({
				id: `ImageModel_${productName + option.name}`,
				...option.thumb,
			}),
		},
		...(option.detailImage) && {
			detailImage: ImageModel.create({
				id: `ImageModel_${productName + option.name}`,
				...option.detailImage,
			}),
		},
	}));
};
