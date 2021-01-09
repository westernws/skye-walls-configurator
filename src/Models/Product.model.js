import { types } from 'mobx-state-tree';
import kebabCase from 'lodash/kebabCase';
import isString from 'lodash/isString';

import { TreeHelpers } from '~/Models/TreeHelpers';
import { SelectionGroupModel } from '~/Models/SelectionGroup.model';
import { ProductImageModel } from '~/Models/ProductImage.model';
import { ImageModel } from '~/Models/Image.model';

const Product = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductModel_') === 0),
		name: '',
		displayName: types.string,
		description: types.string,
		features: types.array(types.string),
		illustrationAnimated: types.maybeNull(ImageModel),
		illustrationStatic: types.maybeNull(ImageModel),
		images: types.array(ProductImageModel),
		inheritedFeatures: '',
		inheritedFeaturesLong: '',
		isActive: false,
		selectionGroups: types.array(SelectionGroupModel),
	})
	.views(self => ({
		get backgroundOptionGroup() {
			return self.optionGroups?.find?.(optGroup => optGroup.name === 'view') || {};
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
			return self.optionGroups?.find?.(optGroup => optGroup.name === 'floor-sills') || {};
		},
		get generatedPdfFilename() {
			return `skye-walls-${kebabCase(self.selectedColor.displayName)}-${kebabCase(self.displayName)}.pdf`;
		},
		get handleOptionGroup() {
			return self.optionGroups?.find?.(optGroup => optGroup.name === 'handles') || {};
		},
		get illustrationAnimatedImage() {
			return self.illustrationAnimated || self.productGroupAnimatedImage;
		},
		get illustrationImage() {
			return self.illustrationStatic || self.productGroupImage;
		},
		get link() {
			const href = ['[product-collection]', '[product-group]', '[product]'];
			const { productGroup } = self;
			const collection = self.getParentOfName('ProductCollection');
			const as = [
				collection.slug,
				productGroup.slug,
				self.slug,
			];

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
		get productGroup() {
			return self.getParentOfName('ProductGroupModel');
		},
		get productGroupAnimatedImage() {
			return self.productGroup?.animatedImage;
		},
		get productGroupDisplayName() {
			return self.productGroup?.displayName || '';
		},
		get productGroupImage() {
			return self.productGroup?.image;
		},
		get productGroupLink() {
			return self.productGroup?.link;
		},
		get reviewSelectionGroups() {
			return self.selectionGroups.filter((selectionGroup) => {
				let result = true;

				if (selectionGroup.name === 'environment') {
					return false;
				}
				selectionGroup.optionGroups.forEach((optionGroup) => {
					if (!optionGroup.options.length) {
						result = false;
					}
				});
				return result;
			});
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
		get selectedImage() {
			const selectedColorName = self.selectedColor.name;
			const selectedHandleName = self.selectedHandle.name;
			const result = self.images.find((image) => {
				if (!image.handle && !selectedHandleName) {
					return image.color.name === selectedColorName;
				}
				return (
					image.color.name === selectedColorName
					&& image.handle?.name === selectedHandleName
				);
			});

			if (!result) {
				console.group('Could not find image');
				console.log('product:', self);
				console.log('selectedColorName', selectedColorName);
				console.log('selectedHandleName', selectedHandleName);
				console.groupEnd();
			}
			return result;
		},
		get selectedOptions() {
			const result = [self.slug];

			self.optionGroups.forEach((optionGroup) => {
				const selectedOption = optionGroup.options?.find?.(option => option.selected) || '';
				const selectedOptionPart = selectedOption?.name?.split?.('-')?.[0] || '';

				if (selectedOptionPart) {
					result.push(`${optionGroup.name}_${selectedOptionPart}`);
				}
			});
			return result.join('|');
		},
		get selectedWall() {
			return self.wallOptionGroup?.options?.find?.(option => option.selected) || {};
		},
		get selectionGroupDisplayNames() {
			return self.selectionGroups?.map?.(selectionGroup => selectionGroup.displayName) || [];
		},
		get selectionGroupsWithSelectedOptions() {
			return self.selectionGroups.filter((selectionGroup) => {
				return selectionGroup.hasSelectedOptions;
			}) || [];
		},
		get sizes() {
			return self.selectedImage.sizes;
		},
		get slug() {
			return kebabCase(self.displayName);
		},
		get src() {
			return self.selectedImage.src;
		},
		get srcSet() {
			return self.selectedImage.srcSet;
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
				let result = selectedOption;

				if (!result && optionGroup.isColor) {
					[result] = optionGroup.options;
				}
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
