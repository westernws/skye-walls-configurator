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
						<header className="flex flex-col flex-wrap space-y-4 items-center mt-12 lg:flex-row lg:flex-nowrap lg:space-y-0 lg:justify-between">
							<h1 className="Heading Heading--bordered items-center text-center flex-col text-2xl lg:text-3xl lg:flex-row">
								Customize Your {selectedProductGroup?.displayGroupName || selectedCollection?.displayGroupName}
								<span className="Heading-centerRule block mt-2 lg:hidden" />
							</h1>
							{
								Boolean(selectedCollection.productGroups?.length > 1) &&
								<select className="Select" defaultValue={selectedProductGroup.name}>
									{
										selectedCollection.productGroups.map(productGroup => (
											<option key={productGroup.name} value={productGroup.name}>{productGroup.displayName}</option>
										))
									}
								</select>
							}
						</header>
						<PanelGroup className="mt-0">
							{
								selectedProducts.map((product) => {
									return (
										<PanelProduct key={product.name} product={product} />
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
