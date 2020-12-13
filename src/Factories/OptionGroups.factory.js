import optionGroupData from '~/Data/optionGroups';
import { OptionGroupModel } from '~/Models/OptionGroup.model';
import { uniqueId } from '~/util/uniqueId';
import { OptionsFactory } from '~/Factories/Options.factory';

export const OptionGroupsFactory = (productOptionGroups) => {
	if (!productOptionGroups?.length) {
		return [];
	}
	const optionGroups = productOptionGroups.map((prodOptGrp) => {
		const selectedOptGrpData = optionGroupData.find(optionGroup => optionGroup.name === prodOptGrp.name);
		const selectedOptionsData = selectedOptGrpData?.options?.filter((option) => {
			return prodOptGrp.options.includes(option.name);
		});

		return {
			...selectedOptGrpData,
			options: selectedOptionsData,
		};
	});

	return optionGroups.map((optionGroup) => {
		const {
			name,
			displayName,
			description = '',
			options = [],
			selectionGroup = '',
			useTooltip = false,
		} = optionGroup;

		return OptionGroupModel.create({
			id: `OptionGroupModel_${uniqueId()}`,
			name,
			displayName,
			description,
			selectionGroup,
			useTooltip,
			...(options.length) && {
				options: OptionsFactory(options, optionGroup.name),
			},
		});
	});
};
