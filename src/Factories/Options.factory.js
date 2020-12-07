import { OptionModel } from '~/Models/Option.model';
import { OptionColorModel } from '~/Models/OptionColor.model';
import { OptionEnvironmentModel } from '~/Models/OptionEnvironment.model';
import { EnvironmentImageModel } from '~/Models/EnvironmentImage.model';
import { uniqueId } from '~/util/uniqueId';

export const OptionsFactory = (options, optionGroupName) => {
	if (optionGroupName === 'color') {
		return options.map(option => OptionColorModel.create({
			id: `OptionColorModel_${uniqueId()}`,
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
			id: `OptionEnvironmentModel_${uniqueId()}`,
			name: option.name,
			description: option.description || '',
			displayName: option.displayName,
			hex: option.hex || '',
			selected: typeof option.selected !== 'undefined',
			image: EnvironmentImageModel.create({
				id: `EnvironmentImageModel_${uniqueId()}`,
				...option.image,
			}),
			...(option.thumb) && {
				thumb: EnvironmentImageModel.create({
					id: `EnvironmentImageModel_${uniqueId()}`,
					...option.thumb,
				}),
			},
		}));
	}
	return options.map(option => OptionModel.create({
		id: `OptionModel_${uniqueId()}`,
		name: option.name,
		description: option.description || '',
		displayName: option.displayName,
		finish: option.finish || '',
		selected: typeof option.selected !== 'undefined',
	}));
};
