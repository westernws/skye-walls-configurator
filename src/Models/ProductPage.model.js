import { types } from 'mobx-state-tree';

export const ProductPageModel = types
	.model('ProductPageModel', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductPageModel_') === 0),
		className: 'Page--product',
	});
