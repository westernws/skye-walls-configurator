import React from 'react';
import { uniqueId } from '~/util/uniqueId';

import { Provider, appStore } from '~/Stores/App.store';
import { Layout } from '~/Components/Layout';
import { DummyImage } from '~/Components/DummyImage';
import { PanelCollection } from '~/Components/PanelCollection';
import { PanelGroup } from '~/Components/PanelGroup';
import { Panel } from '~/Components/Panel';
import { EmailList } from '~/Components/EmailList';
import { Facebook } from '~/Components/svg/Facebook.svg';
import { Instagram } from '~/Components/svg/Instagram.svg';
import { Pinterest } from '~/Components/svg/Pinterest.svg';
import { YouTube } from '~/Components/svg/YouTube.svg';

export default () => {
	return (
		<Provider value={appStore}>
			<Layout>
				<div className="Hero">
					<DummyImage className="Hero-image" width="1600" height="477" />
				</div>
				<main className="Main space-y-20 pb-20">
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
				<div className="bg-gray-lighter px-6 py-8 flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:items-start md:justify-between">
					<EmailList />
					<ul className="Sociables flex justify-center items-center space-x-6">
						<li className="Sociables-facebook">
							<a href="https://www.facebook.com/SkyeWallsbyWWS/">
								<Facebook />
							</a>
						</li>
						<li className="Sociables-instagram">
							<a href="https://www.instagram.com/skye_walls_by_wws/">
								<Instagram />
							</a>
						</li>
						<li className="Sociables-pinterest">
							<a href="https://www.pinterest.com/SkyeWallsbyWWS/pins/">
								<Pinterest />
							</a>
						</li>
						<li className="Sociables-youtube">
							<a href="https://www.youtube.com/user/westernwindowsystems">
								<YouTube />
							</a>
						</li>
					</ul>
				</div>
			</Layout>
		</Provider>
	);
};
