import { types } from 'mobx-state-tree';
import kebabCase from 'lodash/kebabCase';
import isString from 'lodash/isString';

import { TreeHelpers } from '~/Models/TreeHelpers';
import { OptionGroupModel } from '~/Models/OptionGroup.model';

const Product = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductModel_') === 0),
		name: '',
		displayName: types.string,
		description: types.string,
		inheritedFeatures: '',
		inheritedFeaturesLong: '',
		features: types.array(types.string),
		optionGroups: types.array(OptionGroupModel),
		isActive: false,
	})
	.views(self => ({
		get displayGroupName() {
			return self.getParentOfName('ProductCollection').displayGroupName;
		},
		get colorOptionGroup() {
			return self.optionGroups?.find?.(optGroup => optGroup.name === 'color') || {};
		},
		get configLink() {
			const { link } = self;

			return {
				href: `/config${link.href}`,
				as: `/config${link.as}`,
			};
		},
		get featureList() {
			return self.features.map(feature => feature.featureText);
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
		get optionGroupDisplayNames() {
			return self.optionGroups?.map?.(optionGroup => optionGroup.displayName) || [];
		},
		get selectedColor() {
			return self.colorOptionGroup.options.find(option => option.selected);
		},
		get slug() {
			return kebabCase(self.displayName);
		},
	}))
	.actions(self => ({
		afterCreate() {
			self.setDefaultSelected();
		},
		getSelected(optionGroupNames = []) {
			if (!optionGroupNames.length) {
				return self.optionGroups?.map((optionGroup) => {
					return optionGroup?.options?.find(option => option.selected);
				}) || [];
			}
			const selectedOptionGroups = self.optionGroups?.filter?.(optionGroup => optionGroupNames.includes(optionGroup.name));
			const selectedOptions = selectedOptionGroups?.map((selectedOptionGroup) => {
				return selectedOptionGroup.options?.find(option => option.selected) || null;
			});

			return selectedOptions.filter(Boolean);
		},
		setDefaultColor() {
			const colorOptions = self.colorOptionGroup.options;
			const selectedColor = colorOptions.find(option => option.defaultSelected);
			const result = selectedColor || colorOptions[0];

			result.selected = true;
			return result;
		},
		setColor(color = null) {
			const colorOptions = self.colorOptionGroup.options;

			if (!color) {
				colorOptions.find(option => option.selected).selected = false;
				return;
			}
			const colorName = isString(color) ? color : color.name;
			const selectedColor = colorOptions.find(option => option.name === colorName);

			self.colorOptionGroup.setSelected(selectedColor);
		},
		setDefaultSelected() {
			self.setDefaultColor();
		},
		setIsActive(isActive) {
			self.isActive = isActive;
		},
	}));

export const ProductModel = types.compose(Product, TreeHelpers).named('Product');
