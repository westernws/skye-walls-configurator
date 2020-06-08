import { types } from 'mobx-state-tree';
import kebabCase from 'lodash/kebabCase';

import { ProductModel } from '~/Models/Product.model';

export const ProductGroupModel = types
	.model('ProductGroupModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductGroupModel_') === 0),
		name: '',
		displayName: types.string,
		displayGroupName: types.string,
		description: '',
		products: types.optional(types.array(ProductModel), []),
	})
	.views(self => ({
		get slug() {
			return kebabCase(self.displayName);
		},
	}));
