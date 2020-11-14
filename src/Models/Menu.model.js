import { types } from 'mobx-state-tree';
import { parse } from 'uri-parser';

export const MenuModel = types
	.model('MenuModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('MenuModel_') === 0),
		name: types.string,
		displayName: types.string,
		href: types.string,
	})
	.views(self => ({
		get isExternal() {
			return Boolean(parse(self.href).host);
		},
	}));
