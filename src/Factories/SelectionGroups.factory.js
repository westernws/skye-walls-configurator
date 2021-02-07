import selectionGroupData from '~/Data/selectionGroups';
import { SelectionGroupModel } from '~/Models/SelectionGroup.model';
import { OptionGroupsFactory } from '~/Factories/OptionGroups.factory';

export const SelectionGroupsFactory = (productSelectionGroups, productName) => {
	const selectionGroupModels = productSelectionGroups.map((productSelectionGroup) => {
		const selectedSelectionGroupData = selectionGroupData.find(sgd => sgd.name === productSelectionGroup.name);

		return SelectionGroupModel.create({
			id: `SelectionGroupModel_${selectedSelectionGroupData.name + productName}`,
			name: selectedSelectionGroupData.name,
			displayName: selectedSelectionGroupData.displayName,
			displayNameSingular: selectedSelectionGroupData.displayNameSingular || '',
			description: selectedSelectionGroupData.description,
			optionGroups: OptionGroupsFactory(productSelectionGroup.optionGroups, productName),
		});
	});

	return selectionGroupModels;
};
