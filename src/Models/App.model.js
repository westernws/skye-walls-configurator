import { types } from 'mobx-state-tree';
import flattenDeep from 'lodash/flattenDeep';
import buildMediaQuery from 'tailwindcss/lib/util/buildMediaQuery';
import { autorun } from 'mobx';

import { ProductCollectionModel } from '~/Models/ProductCollection.model';
import { ModalModel } from '~/Models/Modal.model';
import { ConfigPageModel } from '~/Models/ConfigPage.model';
import { ProductPageModel } from '~/Models/ProductPage.model';
import { themeConfig } from '~/util/themeConfig';

export const AppModel = types
	.model('App', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('AppModel_') === 0),
		productCollections: types.array(ProductCollectionModel),
		modals: types.map(types.maybeNull(ModalModel)),
		page: types.maybeNull(types.union(ConfigPageModel, ProductPageModel)),
		isMediaQueryXl: false,
	})
	.views(self => ({
		get activePanelProduct() {
			return self.allProducts.find(product => product.isActive) || {};
		},
		get openModals() {
			return [...self.modals.values()].filter(modal => modal.isOpen);
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
				const menu = self.modals.get('modal-menu');

				if (!self.isMediaQueryXl || !menu) {
					return;
				}
				if (menu.isOpen) {
					menu.close();
				}
			}, { name: 'Auto close mobile only menu when going to desktop breakpoint' });
			autorun(() => {
				const pageClassName = self.page?.className;
				const html = document.querySelector('html');
				const removeClasses = [];

				html.classList.forEach((item) => {
					if (item.startsWith('Page--')) {
						removeClasses.push(item);
					}
				});
				html.classList.remove(...removeClasses);
				html.classList.add('Page');
				if (pageClassName) {
					html.classList.add(pageClassName);
				}
			}, { name: 'Auto assign page name class to html tag' });
		},
		closeAllModals() {
			[...self.modals.values()].forEach(modal => modal.close());
		},
		getOpenModalByName(modalName) {
			return self.openModals.find(modal => modal.name === modalName) || {};
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
