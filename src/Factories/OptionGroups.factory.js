import optionGroupData from '~/Data/optionGroups';
import { OptionGroupModel } from '~/Models/OptionGroup.model';
import { OptionsFactory } from '~/Factories/Options.factory';

export const OptionGroupsFactory = (productOptionGroups, productName) => {
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
			id: `OptionGroupModel_${productName + name}`,
			name,
			displayName,
			description,
			selectionGroup,
			useTooltip,
			...(options.length) && {
				options: OptionsFactory(options, optionGroup.name, productName),
			},
		});
	});
};
