import { types } from 'mobx-state-tree';
import flattenDeep from 'lodash/flattenDeep';
import buildMediaQuery from 'tailwindcss/lib/util/buildMediaQuery';
import { autorun } from 'mobx';

import { ProductCollectionModel } from '~/Models/ProductCollection.model';
import { ModalModel } from '~/Models/Modal.model';
import { ConfigPageModel } from '~/Models/ConfigPage.model';
import { themeConfig } from '~/util/themeConfig';

export const AppModel = types
	.model('App', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('AppModel_') === 0),
		productCollections: types.array(ProductCollectionModel),
		modal: ModalModel,
		menu: ModalModel,
		page: types.maybeNull(ConfigPageModel),
		isMediaQueryXl: false,
	})
	.views(self => ({
		get activePanelProduct() {
			return self.allProducts.find(product => product.isActive) || {};
		},
		get allProducts() {
			const products = flattenDeep(self.productCollections.map((productCollection) => {
				if (productCollection.productGroups.length) {
					return productCollection.productGroups.map(productGroup => productGroup.products);
				}
				return productCollection.products;
			}));
			return [...new Set(products)];
		},
	}))
	.actions(self => ({
		afterCreate() {
			if (!process.browser) {
				return;
			}
			const xlMediaQueryStr = buildMediaQuery(themeConfig.theme.screens.xl);
			const matchXlMq = window.matchMedia(xlMediaQueryStr);

			self.setIsMediaQueryXl(matchXlMq.matches);
			matchXlMq.addListener((mql) => {
				self.setIsMediaQueryXl(mql.matches);
			});
			autorun(() => {
				if (!self.isMediaQueryXl || !self.menu) {
					return;
				}
				self.menu.close();
			}, { name: 'Auto close mobile only menu when going to desktop breakpoint' });
		},
		getProductByName(productName) {
			return self.allProducts.find(product => product.name === productName) || {};
		},
		getProductBySlug(productSlug) {
			return self.allProducts.find(product => product.slug === productSlug) || {};
		},
		setActivePanelProduct(product) {
			self.allProducts.forEach(p => p.setIsActive(false));
			if (!product) {
				return;
			}
			product.setIsActive(true);
		},
		setPage(pageModel) {
			self.page = pageModel;
		},
		setIsMediaQueryXl(value) {
			self.isMediaQueryXl = value;
		},
	}));
