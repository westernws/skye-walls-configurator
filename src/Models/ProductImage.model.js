import { types } from 'mobx-state-tree';

import { OptionColorModel } from '~/Models/OptionColor.model';

export const ProductImageModel = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductImageModel_') === 0),
		color: types.reference(OptionColorModel),
		cdnPath: '//buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,width=',
		basePath: '/images/product',
		fileName: '',
		width: types.number,
		useCdn: true,
	})
	.views(self => ({
		get imageSrc() {
			if (!self.fileName) {
				return 'https://dummyimage.com/1000x1000/999/eee.png&text=FPO%20778x779';
			}
			if (self.useCdn) {
				return `${self.cdnPath}${self.width}${self.basePath}/${self.fileName}`;
			}
			return `${self.basePath}/${self.fileName}`;
		},
	}));
