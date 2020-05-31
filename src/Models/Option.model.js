import { types } from 'mobx-state-tree';

export const OptionModel = types
	.model('OptionModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('OptionModel_') === 0),
		name: types.string,
		displayName: types.string,
	});
