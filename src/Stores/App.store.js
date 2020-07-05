import { createContext, useContext } from 'react';
import Router from 'next/router';

import { uniqueId } from '~/util/uniqueId';
import { AppModel } from '~/Models/App.model';
import productCollectionsData from '~/Data/productCollections';
import { ProductCollectionsFactory } from '~/Factories/ProductCollections.factory';
import { ModalModel } from '~/Models/Modal.model';

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
	appStore.modal.close();
	appStore.menu.close();
});
if (process.browser) {
	global.app = appStore;
	console.log(appStore.toJSON());
}
