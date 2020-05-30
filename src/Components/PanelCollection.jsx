import React from 'react';

export const PanelCollection = ({ title, desc, children }) => {
	return (
		<section className="space-y-20">
			<div className="space-y-6 lg:space-y-12">
				<h2 className="Heading Heading--bordered flex-col text-2xl lg:text-4xl lg:flex-row">
					<span className="Heading-rule hidden lg:block" />
					{title}
					<span className="Heading-rule hidden lg:block" />
					<span className="Heading-centerRule block mt-2 lg:hidden" />
				</h2>
				<div className="flex justify-center">
					<div className="w-12/12 md:w-7/12">
						<p>{desc}</p>
					</div>
				</div>
			</div>
			{children}
		</section>
	);
};
