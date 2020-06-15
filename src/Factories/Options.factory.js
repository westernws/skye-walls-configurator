import { OptionModel } from '~/Models/Option.model';
import { OptionColorModel } from '~/Models/OptionColor.model';
import { uniqueId } from '~/util/uniqueId';

export const OptionsFactory = (options, optionGroupName) => {
	if (optionGroupName === 'color') {
		return options.map(option => OptionColorModel.create({
			id: `OptionColorModel_${uniqueId()}`,
			name: option.name,
			displayName: option.displayName,
			selected: typeof option.selected !== 'undefined',
			hex: option.hex,
		}));
	}
	return options.map(option => OptionModel.create({
		id: `OptionModel_${uniqueId()}`,
		name: option.name,
		displayName: option.displayName,
		selected: typeof option.selected !== 'undefined',
	}));
};
