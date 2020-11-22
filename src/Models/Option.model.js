import { types } from 'mobx-state-tree';

import { TreeHelpers } from '~/Models/TreeHelpers';

const Option = types
	.model('OptionModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('OptionModel_') === 0),
		name: types.string,
		displayName: types.string,
		description: types.string,
		selected: types.boolean,
		displayOptionGroupName: '',
	})
	.views(self => ({
		get parent() {
			return self.getParentOfName('OptionGroupModel');
		},
	}));

export const OptionModel = types.compose(Option, TreeHelpers).named('Option');
