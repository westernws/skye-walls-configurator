import React from 'react';

export const HeadingBordered = ({ children, iobsTarget = '' }) => {
	const wrapperProps = {
		className: 'relative',
		...(iobsTarget) && {
			'data-iobs-target': iobsTarget,
		},
	};

	return (
		<div {...wrapperProps}>
			<h2 className="Heading Heading--bordered">
				<span className="Heading-text">{children}</span>
			</h2>
		</div>
	);
};
