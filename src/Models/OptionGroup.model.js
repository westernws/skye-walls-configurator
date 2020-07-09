import { types } from 'mobx-state-tree';
import isString from 'lodash/isString';

import { OptionModel } from '~/Models/Option.model';
import { OptionColorModel } from '~/Models/OptionColor.model';

export const OptionGroupModel = types
	.model('OptionGroupModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('OptionGroupModel_') === 0),
		name: '',
		displayName: types.string,
		description: types.string,
		options: types.optional(types.array(types.union(OptionModel, OptionColorModel)), []),
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
		setSelected(option) {
			const optionName = isString(option) ? option : option.name;
			const selectedOption = self.options.find(o => o.name === optionName);

			self.options.forEach((o) => {
				o.selected = false;
			});
			self.options.find(o => o.name === selectedOption.name).selected = true;
		},
	}));
