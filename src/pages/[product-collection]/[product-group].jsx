import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Provider, appStore } from '~/Stores/App.store';
import { LayoutProductGroup } from '~/Components/LayoutProductGroup';
import { PanelGroup } from '~/Components/PanelGroup';
import { PanelProduct } from '~/Components/PanelProduct';

const ProductGroup = () => {
	const router = useRouter();
	const {
		'product-collection': collectionSlug = '',
		'product-group': productGroupSlug = '',
	} = router.query;
	const selectedCollection = appStore.productCollections?.find?.(collection => collection.slug === collectionSlug);
	const selectedProductGroup = selectedCollection?.productGroups?.find?.(productGroup => productGroup.slug === productGroupSlug);
	const selectedProducts = selectedProductGroup?.products;

	// Activate the first product if there are none activated.
	useEffect(() => {
		if (!selectedProducts?.length) {
			return;
		}
		appStore.setActivePanelProduct(selectedProducts[0]);
	}, [selectedProducts]);
	return (
		<Provider value={appStore}>
			<LayoutProductGroup>
				{
					Boolean(selectedProducts?.length) &&
					<main className="MainComponent pb-20 space-y-6">
						<header className="flex flex-col flex-wrap space-y-4 items-center pt-12 lg:flex-row lg:flex-nowrap lg:space-y-0 lg:justify-between">
							<h1 className="Heading text-blue items-center text-center flex-col text-2xl lg:text-3xl lg:flex-row">
								Customize Your {selectedProductGroup?.displayGroupName || selectedCollection?.displayGroupName}
							</h1>
							<Link href="/">
								<a className="uppercase text-red">&lt; Start over</a>
							</Link>
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
						<p className="font-bold text-center text-sm text-blue">
							More panels are available based on opening size.<br />
							Speak with your local sales team to see what is the right size for your home.
						</p>
						<p className="italic text-gray-light text-center">Please select a product to continue&hellip;</p>
					</main>
				}
			</LayoutProductGroup>
		</Provider>
	);
};

export default ProductGroup;
