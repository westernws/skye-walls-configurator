import { types } from 'mobx-state-tree';

import { ImageModel } from '~/Models/Image.model';

export const EnvironmentImageModel = ImageModel
	.props({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('EnvironmentImageModel_') === 0),
		basePath: '/images/environment',
		get sizes() {
			return '(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)';
		},
	})
	.named('EnvironmentImageModel');
