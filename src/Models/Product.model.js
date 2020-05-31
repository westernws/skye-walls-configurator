import { types } from 'mobx-state-tree';

import { OptionGroupModel } from '~/Models/OptionGroup.model';

export const ProductModel = types
	.model('ProductModel', {
		id: types.refinement(types.identifier, (identifier) => identifier.indexOf('product_') === 0),
		name: '',
		displayName: types.string,
		description: types.string,
		features: [],
		optionGroups: types.array(OptionGroupModel),
	})
	.views((self) => ({
		get featureList() {
			return self.features.map((feature) => feature.featureText);
		},
	}));
