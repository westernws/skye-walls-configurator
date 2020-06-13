import React from 'react';
import { useRouter } from 'next/router';

import { Provider, appStore } from '~/Stores/App.store';
import { LayoutProduct } from '~/Components/LayoutProduct';
import { PanelGroup } from '~/Components/PanelGroup';
import { PanelProduct } from '~/Components/PanelProduct';

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
					<main className="Main pb-20 space-y-6">
						<h1 className="Heading Heading--bordered flex-col text-2xl lg:text-3xl lg:flex-row mt-12">
							Customize Your {selectedProductGroup.displayGroupName}
							<span className="Heading-centerRule block mt-2 lg:hidden" />
						</h1>
						<PanelGroup className="mt-0">
							{
								selectedProducts.map((product) => {
									return (
										<PanelProduct
											key={product.name}
											title={product.displayName}
											shortDesc={product.description}
											link={product.link}
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
