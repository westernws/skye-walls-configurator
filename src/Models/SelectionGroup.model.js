import { types } from 'mobx-state-tree';

import { OptionGroupModel } from '~/Models/OptionGroup.model';

export const SelectionGroupModel = types
	.model('SelectionGroupModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('SelectionGroupModel_') === 0),
		name: '',
		displayName: types.string,
		description: '',
		optionGroups: types.optional(types.array(OptionGroupModel), []),
	})
	.views(self => ({
		get hasMultipleOptionGroups() {
			return self.optionGroups.length > 1;
		},
	}));
