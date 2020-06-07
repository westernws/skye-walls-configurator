import React from 'react';

export const PanelCollection = ({
	title, desc, children, id,
}) => {
	return (
		<section className="space-y-20 pt-20" id={id}>
			<div className="space-y-6 lg:space-y-12">
				<h2 className="Heading Heading--bordered flex-col text-2xl lg:text-3xl lg:flex-row" data-iobs-target={id}>
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
