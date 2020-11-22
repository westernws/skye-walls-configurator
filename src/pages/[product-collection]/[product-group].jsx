import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

import { Provider, appStore } from '~/Stores/App.store';
import { LayoutProductGroup } from '~/Components/LayoutProductGroup';
import { PanelGroup } from '~/Components/PanelGroup';
import { PanelProduct } from '~/Components/PanelProduct';
import { useInput } from '~/util/useInput';

const ProductGroup = () => {
	const router = useRouter();
	const { bind, value, setValue } = useInput();
	const {
		'product-collection': collectionSlug = '',
		'product-group': productGroupSlug = '',
	} = router.query;
	const selectedCollection = appStore.productCollections?.find?.(collection => collection.slug === collectionSlug);
	const selectedProductGroup = selectedCollection?.productGroups?.find?.(productGroup => productGroup.slug === productGroupSlug);
	const selectedProducts = selectedProductGroup?.products;

	useEffect(() => {
		if (!selectedCollection?.showProductGroupSelectControl) {
			return;
		}
		const pg = selectedCollection.productGroups?.find?.(productGroup => productGroup.name === value);

		if (!pg) {
			return;
		}
		const { link } = pg;

		router.push(link.href, link.as);
	}, [value]);
	useEffect(() => {
		const collectionChangeHandler = () => {
			if (selectedCollection?.productGroups?.length <= 1) {
				return;
			}
			setValue(Router.query.product);
		};

		Router.events.on('routeChangeComplete', collectionChangeHandler);
		return () => {
			Router.events.off('routeChangeComplete', collectionChangeHandler);
		};
	}, []);
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
							{
								selectedCollection.showProductGroupSelectControl &&
								<select className="Select" defaultValue={router.query.product} {...bind}>
									{
										selectedCollection.productGroups.map(productGroup => (
											<option key={productGroup.name} value={productGroup.name}>
												{productGroup.displayName}
											</option>
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
						<p className="italic text-gray-light text-center">Please select a product to continue&hellip;</p>
					</main>
				}
			</LayoutProductGroup>
		</Provider>
	);
};

export default ProductGroup;
