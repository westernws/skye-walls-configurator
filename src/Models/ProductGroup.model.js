import { types } from 'mobx-state-tree';
import kebabCase from 'lodash/kebabCase';

import { TreeHelpers } from '~/Models/TreeHelpers';
import { ProductModel } from '~/Models/Product.model';
import { ImageModel } from '~/Models/Image.model';

const ProductGroup = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductGroupModel_') === 0),
		name: '',
		displayName: types.string,
		displayGroupName: types.string,
		description: '',
		products: types.optional(types.array(ProductModel), []),
		image: ImageModel,
		animatedImage: ImageModel,
	})
	.views(self => ({
		get slug() {
			return kebabCase(self.displayName);
		},
		get link() {
			const href = ['[product-collection]', '[product]'];
			const collection = self.getParentOfName('ProductCollection');
			const as = [collection?.slug, self.slug];

			return {
				href: `/${href.join('/')}`,
				as: `/${as.join('/')}`,
			};
		},
	}));

export const ProductGroupModel = types.compose(ProductGroup, TreeHelpers).named('ProductGroupModel');
