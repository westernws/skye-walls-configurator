import { createContext, useContext } from 'react';

import { uniqueId } from '~/util/uniqueId';
import productCollectionsData from '~/Data/productCollections';
import productGroupData from '~/Data/productGroups';
import { AppModel } from '~/Models/App.model';
import { ProductCollectionModel } from '~/Models/ProductCollection.model';
import { ProductGroupModel } from '~/Models/ProductGroup.model';
import productData from '~/Data/products';
import { ProductModel } from '~/Models/Product.model';
import { OptionGroupModel } from '~/Models/OptionGroup.model';
import optionGroupData from '~/Data/optionGroups';
import { OptionModel } from '~/Models/Option.model';

const createOptions = options => options.map(option => OptionModel.create({
	id: `OptionModel_${uniqueId()}`,
	name: option.name,
	displayName: option.displayName,
}));
const createOptionGroups = (optionGroups) => {
	const selectedOptionGroups = optionGroupData.filter(optionGroup => optionGroups.includes(optionGroup.name));

	return selectedOptionGroups.map((optionGroup) => {
		const {
			name, displayName, options = [],
		} = optionGroup;

		return OptionGroupModel.create({
			id: `OptionGroupModel_${uniqueId()}`,
			name,
			displayName,
			...(options.length) && {
				options: createOptions(options),
			},
		});
	});
};

const createProducts = (products) => {
	const selectedProducts = productData.filter(product => products.includes(product.name));

	return selectedProducts.map((product) => {
		const {
			name, displayName, description, features, optionGroups = [],
		} = product;

		return ProductModel.create({
			id: `ProductModel_${uniqueId()}`,
			name,
			displayName,
			description,
			features,
			optionGroups: createOptionGroups(optionGroups),
		});
	});
};
const createProductGroups = (productGroups) => {
	const selectedProductGroups = productGroupData.filter(productGroup => productGroups.includes(productGroup.name));

	return selectedProductGroups.map((productGroup) => {
		const {
			name, displayName, description, products,
		} = productGroup;

		return ProductGroupModel.create({
			id: `ProductGroupModel_${uniqueId()}`,
			name,
			displayName,
			description,
			...(products.length) && {
				products: createProducts(products),
			},
		});
	});
};
const productCollections = productCollectionsData.map((productCollection) => {
	const {
		name, displayName, description, productGroups = [], products = [],
	} = productCollection;

	return ProductCollectionModel.create({
		id: `ProductCollectionModel_${uniqueId()}`,
		name,
		displayName,
		description,
		...(productGroups.length) && {
			productGroups: createProductGroups(productGroups),
		},
		...(products.length) && {
			products: createProducts(products),
		},
	});
});
const AppStoreContext = createContext();

export const { Provider } = AppStoreContext;
export const appStore = AppModel.create({
	id: `AppModel_${uniqueId()}`,
	productCollections,
});
export const useMst = () => {
	const store = useContext(AppStoreContext);

	if (store === null) {
		throw new Error('Store cannot be null, please add a context provider.');
	}
	return store;
};

if (process.browser) {
	global.app = appStore;
	console.log(appStore);
	console.log(appStore.toJSON());
}
