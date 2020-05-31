import { types } from 'mobx-state-tree';

import { OptionModel } from '~/Models/Option.model';

export const OptionGroupModel = types
	.model('OptionGroupModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('OptionGroupModel_') === 0),
		name: '',
		displayName: types.string,
		options: types.optional(types.array(OptionModel), []),
	})
	.views(self => ({
		get displayNames() {
			return self.options.map(option => option.displayName);
		},
	}));
