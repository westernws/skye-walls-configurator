import { types } from 'mobx-state-tree';

import { OptionModel } from '~/Models/Option.model';

const OptionColorModel = OptionModel
	.props({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('OptionColorModel_') === 0),
		hex: types.string,
	})
	.named('OptionColorModel');

export { OptionColorModel };
