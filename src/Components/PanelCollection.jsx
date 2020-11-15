import React from 'react';

export const PanelCollection = ({
	title, desc, children, id,
}) => {
	return (
		<section className="PanelCollection-item space-y-20" id={id}>
			<div className="space-y-6 lg:space-y-12">
				<div className="relative" data-iobs-target={id}>
					<h2 className="Heading Heading--bordered text-center text-blue text-2xl lg:text-3xl 3xl:text-4xl">
						<span className="Heading-text">{title}</span>
					</h2>
				</div>
				<div className="flex justify-center">
					<div className="PanelCollection-description">
						<p>{desc}</p>
					</div>
				</div>
			</div>
			{children}
		</section>
	);
};
