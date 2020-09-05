import selectionGroupData from '~/Data/selectionGroups';
import { SelectionGroupModel } from '~/Models/SelectionGroup.model';
import { uniqueId } from '~/util/uniqueId';
import { OptionGroupsFactory } from '~/Factories/OptionGroups.factory';

export const SelectionGroupsFactory = (productSelectionGroups) => {
	const selectionGroupModels = productSelectionGroups.map((productSelectionGroup) => {
		const selectedSelectionGroupData = selectionGroupData.find(sgd => sgd.name === productSelectionGroup.name);

		return SelectionGroupModel.create({
			id: `SelectionGroupModel_${uniqueId()}`,
			name: selectedSelectionGroupData.name,
			displayName: selectedSelectionGroupData.displayName,
			description: selectedSelectionGroupData.description,
			optionGroups: OptionGroupsFactory(productSelectionGroup.optionGroups),
		});
	});

	return selectionGroupModels;
};
