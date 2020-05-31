import { OptionModel } from '~/Models/Option.model';
import { uniqueId } from '~/util/uniqueId';

export const OptionsFactory = (options) => {
	return options.map(option => OptionModel.create({
		id: `OptionModel_${uniqueId()}`,
		name: option.name,
		displayName: option.displayName,
	}));
};
