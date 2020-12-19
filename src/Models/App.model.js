import { types } from 'mobx-state-tree';
import flattenDeep from 'lodash/flattenDeep';
import buildMediaQuery from 'tailwindcss/lib/util/buildMediaQuery';
import { autorun } from 'mobx';
import Router from 'next/router';

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
		env: types.enumeration('Environment', ['PROD', 'DEV', 'STAGING'], 'PROD'),
	})
	.volatile(() => ({
		matchXlMq: null,
	}))
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

			self.matchXlMq = window.matchMedia(xlMediaQueryStr);
			self.setIsMediaQueryXl(self.matchXlMq.matches);
			self.matchXlMq.addListener((mql) => {
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
		closeAllModals(modals) {
			const theModals = modals || [...self.modals.values()];

			theModals.forEach(modal => modal.close());
		},
		closeAllModalsByType(modalType) {
			self.closeAllModals(self.getOpenModalsByType(modalType));
		},
		getOpenModalByName(modalName) {
			return self.openModals.find(modal => modal.name === modalName) || {};
		},
		getOpenModalsByType(modalType) {
			return self.openModals.filter(modal => modal.type === modalType);
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
		setConfigPage(productSlug) {
			const product = self.getProductBySlug(productSlug);
			const currentSelectionGroup = product.selectionGroups[0].id;
			const currentOptionGroup = product.selectionGroups[0].optionGroups[0].id;

			console.log('set page 2');
			self.setPage(ConfigPageModel.create({
				id: 'ConfigPageModel_main',
				product,
				currentOptionGroup,
				currentSelectionGroup,
			}));
		},
		setPage(pageModel) {
			self.page = pageModel;
		},
		setIsMediaQueryXl(value) {
			self.isMediaQueryXl = value;
		},
	}));
