import Link from 'next/link';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import Router from 'next/router';

import { useMst } from '~/Stores/App.store';
import { Meta } from '~/Components/Meta';
import { Modal } from '~/Components/Modal';
import { ConfigPageModel } from '~/Models/ConfigPage.model';
import { uniqueId } from '~/util/uniqueId';
import { Menu } from '~/Components/Menu';

export const LayoutConfig = observer(({ children }) => {
	const {
		modal, menu, setPage, getProductBySlug, page,
	} = useMst();
	const { router } = Router;
	let product;

	useEffect(() => {
		const { product: productSlug } = router.query;

		product = getProductBySlug(productSlug);
		setPage(ConfigPageModel.create({
			id: `ConfigPageModel_${uniqueId()}`,
			product,
		}));
	}, []);


	if (!page?.product) {
		return null;
	}
	const selectedProduct = page.product;

	global.selectedProduct = selectedProduct;
	console.log('selectedProduct', selectedProduct);

	return (
		<>
			<Modal modal={modal} />
			<Modal modal={menu} />
			<div className="text-sm md:text-lg bg-gray-lighter h-full">
				<Meta />
				<header id="header" className="Header fixed top-0 z-50">
					<nav className="SiteNav SiteNav--tight">
						<div className="SiteNav-wrap">
							<div className="flex items-center">
								<div className="SiteNav-logo">
									<Link href="/">
										<a className="Logo">
											<img src="/images/sw-logo-lite.svg" alt="Skye Walls Replacement Moving Glass Walls and Windows by Western Window Systems" />
										</a>
									</Link>
								</div>
								<div>
									<h1 className="text-lg leading-tight">{selectedProduct.displayName}</h1>
									<div className="text-xs text-gray-light">{selectedProduct.displayGroupName}</div>
								</div>
							</div>
							<Menu
								selectedProduct={selectedProduct}
								categories={selectedProduct.optionGroupDisplayNames}
							/>
						</div>
					</nav>
				</header>
				{children}
			</div>
		</>
	);
});
