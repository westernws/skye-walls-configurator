import { types } from 'mobx-state-tree';

export const MenuModel = types
	.model('MenuModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('MenuModel_') === 0),
		items: types.frozen(),
	});
