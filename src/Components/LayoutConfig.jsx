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
import { ReviewConfig } from '~/Components/ReviewConfig';
import { LongArrowAltLeft } from '~/Components/svg/LongArrowAltLeft.svg';

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
									<Link href="/">
										<a className="Logo">
											<img src="/images/sw-logo-lite.svg" alt="Skye Walls Replacement Moving Glass Walls and Windows by Western Window Systems" />
										</a>
									</Link>
								</div>
								<div className="space-y-1">
									<div className="Header-title space-x-0 xl:space-x-2">
										<h1 className="text-lg leading-tight">{selectedProduct.displayName}</h1>
										<div className="hidden text-xs text-gray-light sm:block">{selectedProduct.displayGroupName}</div>
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
											</>
										}
										{
											isReviewModalOpen &&
											<li>
												<div className="ReviewNav">
													<button
														type="button"
														className="Button Button--tertiary justify-center"
														onClick={() => {
															modal.close();
														}}
													>
														<LongArrowAltLeft />
														Back to Build
													</button>
												</div>
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
								optionGroups={selectedProduct.optionGroups}
							/>
						</div>
					</nav>
				</header>
				{children}
			</div>
		</>
	);
});
