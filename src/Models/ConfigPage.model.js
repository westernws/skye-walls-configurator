import { types } from 'mobx-state-tree';

import { ProductModel } from '~/Models/Product.model';

export const ConfigPageModel = types
	.model('ConfigPageModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ConfigPageModel_') === 0),
		product: types.reference(ProductModel),
	});
