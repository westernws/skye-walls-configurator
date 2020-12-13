import Image from 'next/image';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { useMst } from '~/Stores/App.store';
import { Meta } from '~/Components/Meta';
import { Modals } from '~/Components/Modals';
import { Menu } from '~/Components/Menu';
import { StartOver } from '~/Components/StartOver';
import { ReviewConfig } from '~/Components/ReviewConfig';

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
	const isReviewModalOpen = modal.name === 'reviewModal' && modal.isOpen;

	global.product = selectedProduct;
	console.log(selectedProduct);
	return (
		<>
			<Modals />
			<div>
				<Meta />
				<header id="header" className="Header Header--fixed">
					<nav className="SiteNav SiteNav--config">
						<div className="SiteNav-wrap">
							<div className="flex items-center">
								<div className="SiteNav-logo">
									<a href="https://skyewallsbywws.com/" className="Logo">
										<Image
											src="/images/sw-logo-lite.svg"
											alt="Skye Walls Replacement Moving Glass Walls and Windows by Western Window Systems"
											priority
											unoptimized
											loading="eager"
											layout="responsive"
											width="120"
											height="37"
										/>
									</a>
								</div>
								<div className="space-y-1">
									<div className="Header-title space-x-0 xl:space-x-2">
										<h1 className="text-lg leading-tight font-bold">{selectedProduct.displayName}</h1>
									</div>
									<ul className="space-x-6 hidden xl:flex">
										{
											!isReviewModalOpen &&
											<>
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
														&gt;
													</button>
												</li>
											</>
										}
										{
											isReviewModalOpen &&
											<li>
												<button
													type="button"
													className="Breadcrumb"
													onClick={() => {
														modal.close();
													}}
												>
													<span className="text-red">&lt;&nbsp;</span>
													<span className="Breadcrumb-text text-red">Back to Design</span>
												</button>
											</li>
										}
									</ul>
								</div>
							</div>
							{
								!isReviewModalOpen &&
								<div className="ConfigReview hidden xl:block xl:-mr-4">
									<button
										className="Button xl:px-12"
										type="button"
										onClick={() => {
											modal.open({
												name: 'reviewModal',
												type: 'PANEL',
												showBackdrop: false,
												showCloseBtn: false,
												content: <ReviewConfig />,
											});
										}}
									>
										Review
									</button>
								</div>
							}
							{
								isReviewModalOpen &&
								<div className="hidden xl:block">
									<button
										className="Button xl:px-12"
										type="button"
										onClick={() => {
										}}
									>
										Get Quote
									</button>
								</div>
							}
							<Menu
								selectedProduct={selectedProduct}
								optionGroups={selectedProduct.selectionGroups}
							/>
						</div>
					</nav>
				</header>
				{children}
			</div>
		</>
	);
});
