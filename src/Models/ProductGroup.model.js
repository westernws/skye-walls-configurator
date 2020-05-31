import { types } from 'mobx-state-tree';
import { ProductModel } from '~/Models/Product.model';

export const ProductGroupModel = types
	.model('ProductGroupModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductGroupModel_') === 0),
		name: '',
		displayName: types.string,
		description: '',
		products: types.optional(types.array(ProductModel), []),
	});
