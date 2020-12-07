import { types } from 'mobx-state-tree';

import { TreeHelpers } from '~/Models/TreeHelpers';
import { ImageModel } from '~/Models/Image.model';

const Option = types
	.model('OptionModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('OptionModel_') === 0),
		name: types.string,
		displayName: types.string,
		description: types.string,
		finish: '',
		selected: types.boolean,
		displayOptionGroupName: '',
		thumb: types.maybeNull(ImageModel),
	})
	.views(self => ({
		get parent() {
			return self.getParentOfName('OptionGroupModel');
		},
	}));

export const OptionModel = types.compose(Option, TreeHelpers).named('Option');
