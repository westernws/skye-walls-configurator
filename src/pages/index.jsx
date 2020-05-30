import React from 'react';
import times from 'lodash/times';
import uniqueId from 'lodash/uniqueId';

import { Layout } from '~/Components/Layout';
import { DummyImage } from '~/Components/DummyImage';

export default () => {
	return (
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
				<section className="space-y-20">
					<div className="space-y-6 lg:space-y-12">
						<h2 className="Heading Heading--bordered flex-col text-2xl lg:text-4xl lg:flex-row">
							<span className="Heading-rule hidden lg:block" />
							Sliding
							<span className="Heading-rule hidden lg:block" />
							<span className="Heading-centerRule block mt-2 lg:hidden" />
						</h2>
						<div className="flex justify-center">
							<div className="w-12/12 md:w-7/12">
								<p>
									Also called multi-slide or panoramic doors, our sliding doors feature large panels
									that slide open and stack or tuck away out of sight to connect the indoors with the
									outside. Panels can move in one direction or part in the center.
								</p>
							</div>
						</div>
						<ul className="PanelGroup">
							{
								times(4, () => (
									<li className="Panel space-y-6" key={uniqueId('panel-')}>
										<div className="Panel-img w-full">
											<DummyImage width="720" height="546" />
										</div>
										<div className="Panel-title text-2xl lg:text-4xl">Aluminum</div>
										<p className="Panel-short-desc">
											Used in contemporary living spaces, it can be finished in a variety of
											colors and does not require regular maintenance.
										</p>
										<div className="Panel-cta">
											<button className="Button w-full" type="button"><strong>Design Yours</strong></button>
										</div>
									</li>
								))
							}
						</ul>
					</div>
				</section>
			</main>
		</Layout>
	);
};
