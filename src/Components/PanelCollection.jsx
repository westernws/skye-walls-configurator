import React from 'react';

import { HeadingBordered } from '~/Components/HeadingBordered';

export const PanelCollection = ({
	title, desc, children, id,
}) => {
	return (
		<section className="PanelCollection-item space-y-20" id={id}>
			<div className="space-y-6 lg:space-y-12">
				<HeadingBordered iobsTarget={id}>{title}</HeadingBordered>
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
