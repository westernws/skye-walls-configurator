import { types } from 'mobx-state-tree';

export const ProductCollectionModel = types
	.model('ProductCollectionModel', {
		id: types.refinement(types.identifier, (identifier) => identifier.indexOf('productGroup_') === 0),
		name: '',
		displayName: types.string,
		description: '',
	});
