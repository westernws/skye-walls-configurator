import { types } from 'mobx-state-tree';

export const AppStore = types
	.model('AppStore', {
		id: types.refinement(types.identifier, (identifier) => identifier.indexOf('appStore_') === 0),
	});
