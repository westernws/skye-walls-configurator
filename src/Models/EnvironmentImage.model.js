import { types } from 'mobx-state-tree';

import { ImageModel } from '~/Models/Image.model';

export const EnvironmentImageModel = ImageModel
	.props({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('EnvironmentImageModel_') === 0),
		basePath: '/images/environment',
	})
	.named('EnvironmentImageModel');
