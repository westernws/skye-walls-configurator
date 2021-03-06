import { types } from 'mobx-state-tree';

import { IMAGE_PATH } from '~/global.constants';
import { themeConfig } from '~/util/themeConfig';
import { isString } from '~/util/isString';

export const ImageModel = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ImageModel_') === 0),
		cdnPath: IMAGE_PATH,
		basePath: '/images',
		fileName: '',
		width: types.number,
		useCdn: false,
		aspectRatio: 1,
	})
	.views(self => ({
		get height() {
			return self.width / self.aspectRatio;
		},
		get meanWidth() {
			const middleIdx = Math.floor(self.screens.length / 2);

			return parseInt(self.screens[middleIdx], 10);
		},
		get screens() {
			const screens = Object.values(themeConfig.theme.screens).filter(screen => isString(screen));

			return screens.map(screen => screen.replace('px', ''));
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
		setWidth(newWidth) {
			this.width = newWidth;
		},
	}));
