import { createContext } from 'react';

import { uniqueId } from '~/util/uniqueId';
import productCollectionsData from '~/Data/productCollections';
import productGroupsData from '~/Data/productGroups';
import { AppModel } from '~/Models/App.model';
import { ProductCollectionModel } from '~/Models/ProductCollection.model';
import { ProductGroupModel } from '~/Models/ProductGroup.model';

const createProductGroups = () => productGroupsData.map((productGroup) => {
	const {
		name, displayName, description,
	} = productGroup;

	return ProductGroupModel.create({
		id: `ProductGroupModel_${uniqueId()}`,
		name,
		displayName,
		description,
	});
});
const productCollections = productCollectionsData.map((productCollection) => {
	const {
		name, displayName, description,
	} = productCollection;

	return ProductCollectionModel.create({
		id: `ProductCollectionModel_${uniqueId()}`,
		name,
		displayName,
		description,
		productGroups: createProductGroups(),
	});
});
const AppStoreContext = createContext();

export const { Provider } = AppStoreContext;
export const appStore = AppModel.create({
	id: `AppModel_${uniqueId()}`,
	productCollections,
});

global.app = appStore;
console.log(global.app);
