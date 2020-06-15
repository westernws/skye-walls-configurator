import { types } from 'mobx-state-tree';
import kebabCase from 'lodash/kebabCase';

import { ProductGroupModel } from '~/Models/ProductGroup.model';
import { ProductModel } from '~/Models/Product.model';

export const ProductCollectionModel = types
	.model('ProductCollection', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductCollectionModel_') === 0),
		name: '',
		displayName: types.string,
		displayGroupName: types.string,
		description: '',
		productGroups: types.optional(types.array(ProductGroupModel), []),
		products: types.optional(types.array(ProductModel), []),
	})
	.views(self => ({
		get hasProductGroup() {
			return Boolean(self.productGroups.length);
		},
		get productsAndGroups() {
			return self.products.concat(self.productGroups);
		},
		get slug() {
			return kebabCase(self.displayName);
		},
	}));
