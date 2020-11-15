import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { uniqueId } from '~/util/uniqueId';

import { Provider, appStore } from '~/Stores/App.store';
import { Layout } from '~/Components/Layout';
import { DummyImage } from '~/Components/DummyImage';
import { PanelCollection } from '~/Components/PanelCollection';
import { PanelGroup } from '~/Components/PanelGroup';
import { Panel } from '~/Components/Panel';
import { Facebook } from '~/Components/svg/Facebook.svg';
import { Instagram } from '~/Components/svg/Instagram.svg';
import { Pinterest } from '~/Components/svg/Pinterest.svg';
import { YouTube } from '~/Components/svg/YouTube.svg';

const Index = () => {
	return (
		<Provider value={appStore}>
			<Layout>
				<div className="Hero">
					<DummyImage className="Hero-image" width="1600" height="477" />
				</div>
				<main className="MainComponent space-y-20 pb-20">
					<section className="flex justify-center mb-10">
						<div className="w-12/12 md:w-7/12 mt-6">
							<h1 className="Heading Heading--ruled text-4xl md:text-5xl">Design Your Door</h1>
							<p className="max-w-xl">
								No two transformations are exactly alike. That’s why we designed moving glass walls from
								Skye Walls to be customizable to your aesthetics and lifestyle.
							</p>
						</div>
					</section>
					{
						appStore.productCollections.map((collection) => {
							return (
								<PanelCollection
									key={uniqueId()}
									title={collection.displayName}
									desc={collection.description}
									id={collection.name}
								>
									<PanelGroup>
										{
											collection.productsAndGroups.map((product) => {
												return (
													<Panel
														key={product.name}
														title={product.displayName}
														shortDesc={product.description}
														link={product.link}
													/>
												);
											})
										}
									</PanelGroup>
								</PanelCollection>
							);
						})
					}
				</main>
				<div className="bg-blue">
					<div className="SiteMaxWidth m-auto">
						<footer className="Footer text-base space-y-8 lg:space-y-0 lg:space-x-8">
							<div>
								<Link href="/">
									<a>
										<Image
											src="/images/sw-logo-white.svg"
											className="m-auto"
											alt="Skye Walls Replacement Moving Glass Walls and Windows by Western Window Systems"
											unoptimized
											width="300"
											height="153"
										/>
									</a>
								</Link>
							</div>
							<div>
								<h3 className="text-lg uppercase font-bold">How Can We Help?</h3>
								<ul className="leading-loose FooterMenu">
									<li>
										<a href="tel:877-553-1250">877-553-1250</a>
									</li>
									<li>
										<a href="https://skyewallsbywws.com/contact-us/">Contact Us</a>
									</li>
									<li>
										<a href="https://skyewallsbywws.com/financing/">Financing</a>
									</li>
									<li>
										<a href="https://skyewallsbywws.com/schedule-a-consultation/">
											Schedule a Consultation
										</a>
									</li>
									<li>
										<a href="https://skyewallsbywws.com/the-skye-walls-app/">
											The Skye Walls App
										</a>
									</li>
									<li>
										<a href="https://skyewallsbywws.com/warranties/">Warranties</a>
									</li>
									<li>
										<a href="https://skyewallsbywws.com/terms-and-conditions/">
											Terms & Conditions
										</a>
									</li>
									<li>
										<a href="https://skyewallsbywws.com/privacy-policy/">Privacy Policy</a>
									</li>
									<li>
										<a href="https://skyewallsbywws.com/terms-of-use/">Terms of Use</a>
									</li>
								</ul>
							</div>
							<div className="space-y-12">
								<div>
									<h3 className="text-lg uppercase font-bold text-white">Follow Us</h3>
									<ul className="Sociables space-x-4">
										<li>
											<a
												className="Sociables-item"
												href="https://www.facebook.com/SkyeWallsbyWWS/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Facebook />
											</a>
										</li>
										<li>
											<a
												className="Sociables-item"
												href="https://www.instagram.com/skye_walls_by_wws/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Instagram />
											</a>
										</li>
										<li>
											<a
												className="Sociables-item"
												href="https://www.pinterest.com/SkyeWallsbyWWS/pins/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Pinterest />
											</a>
										</li>
										<li>
											<a
												className="Sociables-item"
												href="https://www.youtube.com/channel/UCFFleba1v_rY_LIH91Rar5g"
												target="_blank"
												rel="noopener noreferrer"
											>
												<YouTube />
											</a>
										</li>
									</ul>
								</div>
								<div style={{ width: '240px' }} className="m-auto">
									<p>Get exclusive updates and news.</p>
									<iframe
										title="Get exclusive updates and news."
										className="max-w-none lazyloaded"
										data-src="https://go.westernwindowsystems.com/l/694473/2020-03-29/22wcwq"
										width="100%"
										height="200"
										frameBorder="0"
									/>
								</div>
							</div>
						</footer>
					</div>
					<div className="SiteMaxWidth m-auto relative">
						<div className="absolute text-white text-xs opacity-50 px-4 left-0">
							{'Icons powered by '}
							<a className="text-white" href="https://fontawesome.com/license">
								Font Awesome
							</a>
						</div>
						<div className="BackToTop">
							<button
								type="button"
								className="BackToTop-text"
								onClick={() => {
									if (!process.browser) {
										return;
									}
									window.scrollTo(0, 0);
								}}
							>
								Back to Top
							</button>
						</div>
					</div>
				</div>
			</Layout>
		</Provider>
	);
};

export default Index;
