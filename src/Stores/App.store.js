import { createContext, useContext } from 'react';
import Router from 'next/router';
import { unprotect } from 'mobx-state-tree';

import { uniqueId } from '~/util/uniqueId';
import { AppModel } from '~/Models/App.model';
import productCollectionsData from '~/Data/productCollections';
import { ProductCollectionsFactory } from '~/Factories/ProductCollections.factory';
import { ConfigPageModel } from '~/Models/ConfigPage.model';

const AppStoreContext = createContext();
const { Provider } = AppStoreContext;
const appStore = AppModel.create({
	id: `AppModel_${uniqueId()}`,
	productCollections: ProductCollectionsFactory(productCollectionsData),
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
	if (Router.route === '/config/[product-collection]/[product]') {
		const { product: productSlug } = Router.query;
		const product = appStore.getProductBySlug(productSlug);

		appStore.setPage(ConfigPageModel.create({
			id: `ConfigPageModel_${uniqueId()}`,
			product,
		}));
	}
	appStore.modals.get('modal-primary').close();
	appStore.modals.get('modal-menu').close();
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
