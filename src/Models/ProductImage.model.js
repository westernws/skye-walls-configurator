import { types } from 'mobx-state-tree';

import { OptionColorModel } from '~/Models/OptionColor.model';
import { ImageModel } from '~/Models/Image.model';

export const ProductImageModel = ImageModel
	.props({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductImageModel_') === 0),
		color: types.reference(OptionColorModel),
		basePath: '/images/product',
		get sizes() {
			return '(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)';
		},
	})
	.named('ProductImageModel');
