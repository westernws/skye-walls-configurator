import { types } from 'mobx-state-tree';
import kebabCase from 'lodash/kebabCase';
import isString from 'lodash/isString';

import { TreeHelpers } from '~/Models/TreeHelpers';
import { SelectionGroupModel } from '~/Models/SelectionGroup.model';
import { ProductImageModel } from '~/Models/ProductImage.model';

const Product = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductModel_') === 0),
		name: '',
		displayName: types.string,
		description: types.string,
		inheritedFeatures: '',
		inheritedFeaturesLong: '',
		features: types.array(types.string),
		selectionGroups: types.array(SelectionGroupModel),
		isActive: false,
		images: types.array(ProductImageModel),
	})
	.views(self => ({
		get backgroundOptionGroup() {
			return self.optionGroups?.find?.(optGroup => optGroup.name === 'background') || {};
		},
		get collectionName() {
			return self.getParentOfName('ProductCollection')?.name || '';
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
		get displayGroupName() {
			return self.getParentOfName('ProductCollection').displayGroupName;
		},
		get featureList() {
			return self.features.map(feature => feature.featureText);
		},
		get floorOptionGroup() {
			return self.optionGroups?.find?.(optGroup => optGroup.name === 'floor') || {};
		},
		get floorTracksOptionGroup() {
			return self.optionGroups?.find?.(optGroup => optGroup.name === 'floor-tracks') || {};
		},
		get handleOptionGroup() {
			return self.optionGroups?.find?.(optGroup => optGroup.name === 'handles') || {};
		},
		get imageSrc() {
			const selectedColorName = self.selectedColor.name;
			const selectedImage = self.images.find(image => image.color.name === selectedColorName);

			return selectedImage.imageSrc;
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
		get optionGroups() {
			const result = [];

			self.selectionGroups.forEach((selectionGroup) => {
				selectionGroup.optionGroups.forEach((optionGroup) => {
					result.push(optionGroup);
				});
			});
			return result;
		},
		get screenOptionGroup() {
			return self.optionGroups?.find?.(optGroup => optGroup.name === 'screen') || {};
		},
		get selectedBackground() {
			return self.backgroundOptionGroup?.options?.find?.(option => option.selected) || {};
		},
		get selectedColor() {
			return self.colorOptionGroup?.options?.find?.(option => option.selected) || {};
		},
		get selectedFloor() {
			return self.floorOptionGroup?.options?.find?.(option => option.selected) || {};
		},
		get selectedFloorTracks() {
			return self.floorTracksOptionGroup?.options?.find?.(option => option.selected) || {};
		},
		get selectedHandle() {
			return self.handleOptionGroup?.options?.find?.(option => option.selected) || {};
		},
		get selectedOptions() {
			const selectedOptions = [
				self.selectedBackground,
				self.selectedColor,
				self.selectedFloor,
				self.selectedFloorTracks,
				self.selectedHandle,
				self.selectedScreen,
				self.selectedWall,
			];

			return selectedOptions.map((selectedOption) => {
				return {
					optionGroup: selectedOption.parent,
					option: selectedOption,
				};
			});
		},
		get selectedScreen() {
			if (!self.screenOptionGroup) {
				return null;
			}
			return self.screenOptionGroup.options?.find?.(option => option.selected) || {
				description: self.screenOptionGroup.description,
			};
		},
		get selectedWall() {
			return self.wallOptionGroup?.options?.find?.(option => option.selected) || {};
		},
		get selectionGroupDisplayNames() {
			return self.selectionGroups?.map?.(selectionGroup => selectionGroup.displayName) || [];
		},
		get slug() {
			return kebabCase(self.displayName);
		},
		get wallOptionGroup() {
			return self.optionGroups?.find?.(optGroup => optGroup.name === 'wall') || {};
		},
	}))
	.actions(self => ({
		afterCreate() {
			self.setDefaultSelected();
		},
		getOptionGroupByName(optionGroupName) {
			return self.optionGroups?.find?.(optGroup => optGroup.name === optionGroupName) || {};
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
		setOption(optionGroupName, optionName) {
			const optionGroup = self.getOptionGroupByName(optionGroupName);

			if (!optionGroup) {
				return;
			}
			optionGroup.setSelected(optionName);
		},
		setDefaultSelected() {
			self.optionGroups?.forEach?.((optionGroup) => {
				if (!optionGroup.options?.length) {
					return;
				}
				const selectedOption = optionGroup?.options?.find?.(option => option.defaultSelected);
				const result = selectedOption || optionGroup.options[0];

				if (result) {
					result.selected = true;
				}
			});
		},
		setIsActive(isActive) {
			self.isActive = isActive;
		},
	}));

export const ProductModel = types.compose(Product, TreeHelpers).named('Product');
