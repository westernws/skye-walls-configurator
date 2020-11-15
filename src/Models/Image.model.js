import { types } from 'mobx-state-tree';

import { IMAGE_PATH } from '~/global.constants';
import { themeConfig } from '~/util/themeConfig';

export const ImageModel = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ImageModel_') === 0),
		cdnPath: IMAGE_PATH,
		basePath: '/images/environment',
		fileName: '',
		width: types.number,
		useCdn: true,
	})
	.views(self => ({
		get meanWidth() {
			const middleIdx = Math.floor(self.screens.length / 2);

			return parseInt(self.screens[middleIdx], 10);
		},
		get screens() {
			return Object.values(themeConfig.theme.screens).map(screen => screen.replace('px', ''));
		},
		get src() {
			return self.getSrcByWidth().src;
		},
		get srcSet() {
			const srcs = self.screens.filter(screen => parseInt(screen, 10)).map((screen) => {
				const { src, width } = self.getSrcByWidth(screen);

				return `${src} ${width}w`;
			});

			return srcs.join(', ');
		},
	}))
	.actions(self => ({
		getSrcByWidth(width = self.meanWidth) {
			let src = `${self.basePath}/${self.fileName}`;

			if (!self.fileName) {
				src = 'https://dummyimage.com/1000x1000/999/eee.png&text=FPO%20778x779';
			} else if (self.useCdn) {
				src = `${self.cdnPath}${width}${self.basePath}/${self.fileName}`;
			}
			return {
				src,
				width,
			};
		},
	}));
