import { types } from 'mobx-state-tree';

export const OptionGroupModel = types
	.model('OptionGroupModel', {
		id: types.refinement(types.identifier, (identifier) => identifier.indexOf('option_') === 0),
		name: '',
		displayName: types.string,
		options: types.array,
	})
	.views((self) => ({
		get displayNames() {
			return self.options.map((option) => option.displayName);
		},
	}));
