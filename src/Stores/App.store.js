import { createContext, useContext } from 'react';
import Router from 'next/router';
import { unprotect, getSnapshot, applySnapshot } from 'mobx-state-tree';

import { AppModel } from '~/Models/App.model';
import productCollectionsData from '~/Data/productCollections';
import { ProductCollectionsFactory } from '~/Factories/ProductCollections.factory';
import { ConfigPageModel } from '~/Models/ConfigPage.model';
import { ProductPageModel } from '~/Models/ProductPage.model';

global.getSnapshot = getSnapshot;
global.applySnapshot = applySnapshot;
const AppStoreContext = createContext();
const { Provider } = AppStoreContext;
const appStore = AppModel.create({
	id: 'AppModel_main',
	productCollections: ProductCollectionsFactory(productCollectionsData),
	env: 'STAGING',
	modals: {},
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
			id: 'ConfigPageModel_main',
			product,
			currentOptionGroup,
			currentSelectionGroup,
		}));
	} else if (Router.route === '/[product-collection]/[product-group]') {
		appStore.setPage(ProductPageModel.create({
			id: 'ProductPageModel_main',
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
