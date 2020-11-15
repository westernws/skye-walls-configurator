import React from 'react';
import Image from 'next/image';

import { Provider, appStore } from '~/Stores/App.store';
import { Layout } from '~/Components/Layout';
import { PanelCollection } from '~/Components/PanelCollection';
import { PanelGroup } from '~/Components/PanelGroup';
import { Panel } from '~/Components/Panel';
import { Footer } from '~/Components/Footer';

const Index = () => {
	return (
		<Provider value={appStore}>
			<Layout>
				<div className="SiteMaxWidth m-auto">
					<div className="Hero">
						<Image
							src="/images/hero.jpg"
							className="Hero-image"
							alt=""
							priority
							loading="eager"
							layout="fill"
						/>
						<div className="absolute top-0 bottom-0 w-full h-full bg-gradient-to-r from-white" />
						<div className="Hero-text">
							<h1 className="text-blue mb-4 text-5xl 3xl:text-6xl">Design Your Door</h1>
							<p className="max-w-xl 3xl:text-xl">
								No two transformations are exactly alike. That’s why we designed moving glass walls from
								Skye Walls to be customizable to your aesthetics and lifestyle.
							</p>
						</div>
					</div>
				</div>
				<main className="MainComponent space-y-20 pb-20">
					<section className="flex justify-center mb-10 md:hidden">
						<div className="w-full mt-6">
							<h1 className="text-blue text-4xl">Design Your Door</h1>
							<p className="max-w-xl">
								No two transformations are exactly alike. That’s why we designed moving glass walls from
								Skye Walls to be customizable to your aesthetics and lifestyle.
							</p>
						</div>
					</section>
					<div className="flex flex-col md:flex-row md:space-x-6">
						{
							appStore.productCollections.map((collection) => {
								return (
									<PanelCollection
										key={collection.name}
										title={collection.displayName}
										desc={collection.description}
										id={collection.name}
									>
										<PanelGroup>
											{
												collection.productGroups.map((product) => {
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
					</div>
				</main>
				<Footer />
			</Layout>
		</Provider>
	);
};

export default Index;
