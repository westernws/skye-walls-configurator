import React from 'react';

import { Provider, appStore } from '~/Stores/App.store';
import { Layout } from '~/Components/Layout';
import { DummyImage } from '~/Components/DummyImage';
import { PanelCollection } from '~/Components/PanelCollection';
import { PanelGroup } from '~/Components/PanelGroup';
import { Panel } from '~/Components/Panel';

export async function getStaticProps() {
	return {
		props: {
			appStore,
		},
	};
}
export default () => {
	return (
		<Provider value={appStore}>
			<Layout>
				<div className="Hero">
					<DummyImage className="Hero-image" width="1600" height="477" />
				</div>
				<main className="Main space-y-20">
					<section className="flex justify-center mb-10">
						<div className="w-12/12 md:w-7/12 mt-6">
							<h1 className="Heading Heading--ruled text-4xl md:text-5xl">Design Your Door</h1>
							<p className="max-w-xl">
								No two transformations are exactly alike. That’s why we designed moving glass walls from
								Skye Walls to be customizable to your aesthetics and lifestyle.
							</p>
						</div>
					</section>
					<PanelCollection
						title="Sliding"
						desc="
							Also called multi-slide or panoramic doors, our sliding doors feature large panels
							that slide open and stack or tuck away out of sight to connect the indoors with the
							outside. Panels can move in one direction or part in the center.
						"
					>
						<PanelGroup>
							<Panel
								title="Aluminum"
								shortDesc="
									Used in contemporary living spaces, it can be finished in a variety of
									colors and does not require regular maintenance.
								"
							/>
						</PanelGroup>
					</PanelCollection>
				</main>
			</Layout>
		</Provider>
	);
};
