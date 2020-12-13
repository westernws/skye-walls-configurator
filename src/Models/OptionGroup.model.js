import { types } from 'mobx-state-tree';
import isString from 'lodash/isString';

import { TreeHelpers } from '~/Models/TreeHelpers';
import { OptionModel } from '~/Models/Option.model';
import { OptionColorModel } from '~/Models/OptionColor.model';
import { OptionEnvironmentModel } from '~/Models/OptionEnvironment.model';

const OptionGroup = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('OptionGroupModel_') === 0),
		name: '',
		displayName: types.string,
		description: types.string,
		options: types.optional(types.array(types.union(OptionModel, OptionColorModel, OptionEnvironmentModel)), []),
		useTooltip: false,
	})
	.views(self => ({
		get displayNames() {
			return self.options.map(option => option.displayName);
		},
		get defaultSelected() {
			const result = self.options.find(option => option.selected);

			if (!result) {
				return self.options[0];
			}
			return result;
		},
		get isColor() {
			return self.name === 'color';
		},
		get selectedOption() {
			return self.options.find(option => option.selected);
		},
		get selectionGroup() {
			return self.getParentOfName('SelectionGroupModel');
		},
		get summaryDisplayName() {
			if (!self.isColor) {
				return '';
			}
			return 'Colors';
		},
		get summaryOptions() {
			if (!self.isColor || !self.options.length) {
				return '';
			}
			const isPlural = self.options.length > 1;

			return [{
				displayName: `Choice of ${self.options.length} Color${isPlural && 's'}`,
			}];
		},
	}))
	.actions(self => ({
		getOptionsByDisplayOptionGroupName(displayGroupName) {
			return self.options?.filter?.((option) => {
				return option.displayOptionGroupName === displayGroupName;
			}) || [];
		},
		setSelected(option) {
			const optionName = isString(option) ? option : option.name;
			const selectedOption = self.options.find(o => o.name === optionName);

			self.options.forEach((o) => {
				o.selected = false;
			});
			self.options.find(o => o.name === selectedOption.name).selected = true;
		},
	}));

export const OptionGroupModel = types.compose(OptionGroup, TreeHelpers).named('OptionGroup');
