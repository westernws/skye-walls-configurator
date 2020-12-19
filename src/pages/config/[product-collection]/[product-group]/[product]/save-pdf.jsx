import {getSnapshot} from 'mobx-state-tree';
import {appStore, Provider} from '-/src/Stores/App.store';
import Router from 'next/router';
import {ConfigPageModel} from '-/src/Models/ConfigPage.model';

const SavePdf = (props) => {
	console.log('appStore', props.appStorePage);
	return (
		<Provider value={appStore}>
			<h1>ohai</h1>
		</Provider>
	);
};

export async function getServerSideProps(context) {
	// console.log('context.res.query', context.query);
	const { product: productSlug } = context.query;
	const product = appStore.getProductBySlug(productSlug);
	const currentSelectionGroup = product.selectionGroups[0].id;
	const currentOptionGroup = product.selectionGroups[0].optionGroups[0].id;

	console.log('set page 2');
	appStore.setPage(ConfigPageModel.create({
		id: 'ConfigPageModel_main',
		product,
		currentOptionGroup,
		currentSelectionGroup,
	}));
	return {
		props: {
			foo: 'bar',
			appStore: getSnapshot(appStore),
			appStorePage: appStore.page,
		},
	};
}

export default SavePdf;
