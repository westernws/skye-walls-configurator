import { types } from 'mobx-state-tree';

import { OptionColorModel } from '~/Models/OptionColor.model';
import { ImageModel } from '~/Models/Image.model';
import { OptionModel } from '~/Models/Option.model';

export const ProductImageModel = ImageModel
	.props({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductImageModel_') === 0),
		color: types.reference(OptionColorModel),
		// TODO (aboyer) Remove null here once everything has a handle.
		handle: types.maybeNull(types.reference(OptionModel)),
		basePath: '/images/product',
		get sizes() {
			return '(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)';
		},
	})
	.named('ProductImageModel');
