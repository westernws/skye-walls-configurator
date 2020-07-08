import Link from 'next/link';
import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';
import { Meta } from '~/Components/Meta';
import { Modals } from '~/Components/Modals';
import { Menu } from '~/Components/Menu';
import { StartOver } from '~/Components/StartOver';
import { ChangeProduct } from '~/Components/ChangeProduct';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';

export const LayoutConfig = observer(({ children }) => {
	const {
		modals, page,
	} = useMst();

	if (!page?.product) {
		return null;
	}
	const selectedProduct = page.product;
	const modal = modals.get('modal-primary');
	const menu = modals.get('modal-menu');

	console.log(selectedProduct);
	return (
		<>
			<Modals />
			<div className="Root Root--alt">
				<Meta />
				<header id="header" className="Header Header--fixed">
					<nav className="SiteNav SiteNav--config">
						<div className="SiteNav-wrap">
							<div className="flex items-center">
								<div className="SiteNav-logo">
									<Link href="/">
										<a className="Logo">
											<img src="/images/sw-logo-lite.svg" alt="Skye Walls Replacement Moving Glass Walls and Windows by Western Window Systems" />
										</a>
									</Link>
								</div>
								<div className="space-y-1">
									<div className="items-baseline xl:flex xl:space-x-2 xl:uppercase">
										<h1 className="text-lg leading-tight">{selectedProduct.displayName}</h1>
										<div className="text-xs text-gray-light">{selectedProduct.displayGroupName}</div>
									</div>
									<ul className="space-x-6 hidden xl:flex">
										<li>
											<button
												className="Breadcrumb"
												type="button"
												onClick={() => {
													menu.close();
													modal.open({
														type: 'FROSTY',
														title: 'Start Over?',
														content: <StartOver />,
													});
												}}
											>
												<span className="Breadcrumb-text">Start Over</span>
												<ChevronSolid direction="right" className="Breadcrumb-img" />
											</button>
										</li>
										<li>
											<button
												className="Breadcrumb"
												type="button"
												onClick={() => {
													menu.close();
													modal.open({
														name: 'changeProduct',
														type: 'SLIDER',
														showCloseBtnText: true,
														content: <ChangeProduct selectedProduct={selectedProduct} />,
													});
												}}
											>
												<span className="Breadcrumb-text">Change Product</span>
												<ChevronSolid direction="right" className="Breadcrumb-img" />
											</button>
										</li>
									</ul>
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
