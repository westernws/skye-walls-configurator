import React from 'react';
import { Layout } from '~/Components/Layout';

export default () => {
	return (
		<Layout>
			<div className="Hero">
				<img
					className="Hero-image"
					src="http://www.gifpng.com/1600x477/324aa8/ffffff?border-width=1&border-type=rectangle&border-color=ff00ff&font-size=48&text=FPO"
					alt=""
				/>
			</div>
			<main className="Main space-y-20">
				<section className="flex justify-center mb-10">
					<div className="w-12/12 md:w-7/12 mt-6">
						<h1 className="Heading Heading--ruled md:text-5xl">Design Your Door</h1>
						<p className="max-w-xl">
							No two transformations are exactly alike. That’s why we designed moving glass walls from
							Skye Walls to be customizable to your aesthetics and lifestyle.
						</p>
					</div>
				</section>
				<section className="space-y-20">
					<div className="space-y-12">
						<h2 className="Heading Heading--bordered">
							<span className="Heading-rule" />
							Sliding
							<span className="Heading-rule" />
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
						<div className="PanelGroup">
							<div className="Panel" />
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
};
