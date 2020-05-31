import { types } from 'mobx-state-tree';

import { ProductGroupModel } from '~/Models/ProductGroup.model';

export const ProductCollectionModel = types
	.model('ProductCollectionModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductCollectionModel_') === 0),
		name: '',
		displayName: types.string,
		description: '',
		productGroups: types.array(ProductGroupModel),
	});
