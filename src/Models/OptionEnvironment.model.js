import { types } from 'mobx-state-tree';

import { OptionModel } from '~/Models/Option.model';
import { EnvironmentImageModel } from '~/Models/EnvironmentImage.model';

const OptionEnvironmentModel = OptionModel
	.props({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('OptionEnvironmentModel_') === 0),
		image: types.maybeNull(EnvironmentImageModel),
		thumb: types.maybeNull(EnvironmentImageModel),
		hex: '',
	})
	.named('OptionEnvironmentModel');

export { OptionEnvironmentModel };
