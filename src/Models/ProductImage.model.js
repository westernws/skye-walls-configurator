import { types } from 'mobx-state-tree';

import { DOMAIN } from '~/global.constants';
import { themeConfig } from '~/util/themeConfig';
import { OptionColorModel } from '~/Models/OptionColor.model';

export const ProductImageModel = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ProductImageModel_') === 0),
		color: types.reference(OptionColorModel),
		cdnPath: `//${DOMAIN}/cdn-cgi/image/fit=contain,dpr=1,width=`,
		basePath: '/images/product',
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
		get sizes() {
			return '(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)';
		},
		get src() {
			return self.getSrcByWidth().src;
		},
		get srcSet() {
			const srcs = self.screens.filter(screen => parseInt(screen, 10)).map((screen) => {
				const { src, width } = self.getSrcByWidth(screen);

				return `${src} ${width}w`;
			});

			console.log(srcs);
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
