import { types } from 'mobx-state-tree';
import kebabCase from 'lodash/kebabCase';

import { TreeHelpers } from '~/Models/TreeHelpers';
import { OptionGroupModel } from '~/Models/OptionGroup.model';

const Product = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductModel_') === 0),
		name: '',
		displayName: types.string,
		description: types.string,
		features: types.array(types.string),
		optionGroups: types.array(OptionGroupModel),
		isActive: false,
	})
	.views(self => ({
		get featureList() {
			return self.features.map(feature => feature.featureText);
		},
		get slug() {
			return kebabCase(self.displayName);
		},
		get link() {
			const href = ['[product-collection]', '[product]'];
			const productGroup = self.getParentOfName('ProductGroup');
			const collection = self.getParentOfName('ProductCollection');
			const productSlug = [productGroup?.slug, self.slug].filter(Boolean);
			const as = [collection?.slug, productSlug.join('-')];

			return {
				href: `/${href.join('/')}`,
				as: `/${as.join('/')}`,
			};
		},
		get colorOptionGroup() {
			return self.optionGroups?.find?.(optGroup => optGroup.name === 'color') || {};
		},
	}))
	.actions(self => ({
		setColor(colorName) {
			self.colorOptionGroup.setSelected(colorName);
		},
		setIsActive(isActive) {
			self.isActive = isActive;
		},
	}));

export const ProductModel = types.compose(Product, TreeHelpers).named('Product');
