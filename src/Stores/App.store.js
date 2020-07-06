import { createContext, useContext } from 'react';
import Router from 'next/router';

import { uniqueId } from '~/util/uniqueId';
import { AppModel } from '~/Models/App.model';
import productCollectionsData from '~/Data/productCollections';
import { ProductCollectionsFactory } from '~/Factories/ProductCollections.factory';
import { ModalModel } from '~/Models/Modal.model';
import { ConfigPageModel } from '~/Models/ConfigPage.model';

const AppStoreContext = createContext();

export const { Provider } = AppStoreContext;
export const appStore = AppModel.create({
	id: `AppModel_${uniqueId()}`,
	productCollections: ProductCollectionsFactory(productCollectionsData),
	modal: ModalModel.create({
		id: `ModalModel_${uniqueId()}`,
	}),
	menu: ModalModel.create({
		id: `ModalModel_${uniqueId()}`,
	}),
});
export const useMst = () => {
	const store = useContext(AppStoreContext);

	if (store === null) {
		throw new Error('Store cannot be null, please add a context provider.');
	}
	return store;
};

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
	appStore.modal.close();
	appStore.menu.close();
});
if (process.browser) {
	global.app = appStore;
	console.log(appStore.toJSON());
}
