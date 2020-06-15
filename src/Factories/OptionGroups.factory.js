import optionGroupData from '~/Data/optionGroups';
import { OptionGroupModel } from '~/Models/OptionGroup.model';
import { uniqueId } from '~/util/uniqueId';
import { OptionsFactory } from '~/Factories/Options.factory';

export const OptionGroupsFactory = (optionGroups) => {
	const selectedOptionGroups = optionGroupData.filter(optionGroup => optionGroups.includes(optionGroup.name));

	return selectedOptionGroups.map((optionGroup) => {
		const {
			name, displayName, options = [],
		} = optionGroup;

		return OptionGroupModel.create({
			id: `OptionGroupModel_${uniqueId()}`,
			name,
			displayName,
			...(options.length) && {
				options: OptionsFactory(options, optionGroup.name),
			},
		});
	});
};
