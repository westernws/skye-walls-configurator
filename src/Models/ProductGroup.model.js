import { types } from 'mobx-state-tree';

export const ProductGroupModel = types
	.model('ProductGroupModel', {
		id: types.refinement(types.identifier, (identifier) => identifier.indexOf('productGroup_') === 0),
		name: '',
		displayName: types.string,
		description: '',
	});
