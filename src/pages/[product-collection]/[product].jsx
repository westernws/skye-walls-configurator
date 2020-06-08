import React from 'react';
import { useRouter } from 'next/router';

import { Provider, appStore } from '~/Stores/App.store';
import { LayoutProduct } from '~/Components/LayoutProduct';
import { PanelGroup } from '~/Components/PanelGroup';
import { Panel } from '~/Components/Panel';

export default () => {
	const router = useRouter();
	const { product: productSlug } = router.query;
	const collectionSlug = router.query['product-collection'];
	const selectedCollection = appStore.productCollections.find(collection => collection.slug === collectionSlug);
	let selectedProductGroup;
	let selectedProducts;

	if (selectedCollection?.hasProductGroup) {
		selectedProductGroup = selectedCollection.productsAndGroups.find(product => product.slug === productSlug);
		selectedProducts = selectedProductGroup?.products;
	} else if (selectedCollection) {
		selectedProducts = selectedCollection.productsAndGroups;
	}
	return (
		<Provider value={appStore}>
			<LayoutProduct>
				{
					Boolean(selectedProducts?.length) &&
					<main className="Main pb-20">
						<h1 className="Heading mt-10 mb-5 text-2xl lg:text-3xl">Customize Your {selectedProductGroup.displayGroupName}</h1>
						<PanelGroup className="mt-0">
							{
								selectedProducts.map((product) => {
									return (
										<Panel
											className="Panel--product"
											key={product.name}
											title={product.displayName}
											shortDesc={product.description}
											link={appStore.getProductLink(product)}
										/>
									);
								})
							}
						</PanelGroup>
					</main>
				}
			</LayoutProduct>
		</Provider>
	);
};
