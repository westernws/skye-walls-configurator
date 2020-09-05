import { types } from 'mobx-state-tree';

import { DOMAIN } from '~/global.constants';

export const EnvironmentImageModel = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('EnvironmentImageModel_') === 0),
		cdnPath: `//${DOMAIN}/cdn-cgi/image/fit=contain,dpr=1,width=`,
		basePath: '/images/environment',
		fileName: '',
		width: types.number,
		useCdn: false,
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
