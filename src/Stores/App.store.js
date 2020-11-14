import { createContext, useContext } from 'react';
import Router from 'next/router';
import { unprotect } from 'mobx-state-tree';

import { uniqueId } from '~/util/uniqueId';
import { AppModel } from '~/Models/App.model';
import productCollectionsData from '~/Data/productCollections';
import { ProductCollectionsFactory } from '~/Factories/ProductCollections.factory';
import { ConfigPageModel } from '~/Models/ConfigPage.model';
import { ProductPageModel } from '~/Models/ProductPage.model';
import { MenuModel } from '~/Models/Menu.model';
import topMenuData from '~/Data/topMenu';

const AppStoreContext = createContext();
const { Provider } = AppStoreContext;
const appStore = AppModel.create({
	id: `AppModel_${uniqueId()}`,
	productCollections: ProductCollectionsFactory(productCollectionsData),
	env: 'STAGING',
	modals: {},
	topMenu: topMenuData.map(menuItem => MenuModel.create({
		id: `MenuModel_${uniqueId()}`,
		name: menuItem.name,
		displayName: menuItem.displayName,
		href: menuItem.href,
	})),
});
const useMst = () => {
	const store = useContext(AppStoreContext);

	if (store === null) {
		throw new Error('Store cannot be null, please add a context provider.');
	}
	return store;
};

unprotect(appStore);
appStore.modals.put({ id: 'modal-primary' });
appStore.modals.put({ id: 'modal-secondary' });
appStore.modals.put({ id: 'modal-menu' });
Router.events.on('routeChangeComplete', () => {
	if (appStore.page) {
		appStore.setPage(null);
	}
	if (Router.route.startsWith('/config/')) {
		const { product: productSlug } = Router.query;
		const product = appStore.getProductBySlug(productSlug);
		const currentSelectionGroup = product.selectionGroups[0].id;
		const currentOptionGroup = product.selectionGroups[0].optionGroups[0].id;

		appStore.setPage(ConfigPageModel.create({
			id: `ConfigPageModel_${uniqueId()}`,
			product,
			currentOptionGroup,
			currentSelectionGroup,
		}));
	} else if (Router.route === '/[product-collection]/[product]') {
		appStore.setPage(ProductPageModel.create({
			id: `ProductPageModel_${uniqueId()}`,
		}));
	}
	appStore.closeAllModals();
});
if (process.browser) {
	global.app = appStore;
	console.log(appStore.toJSON());
}

export {
	Provider,
	appStore,
	useMst,
};
