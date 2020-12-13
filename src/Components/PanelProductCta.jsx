import React from 'react';
import Link from 'next/link';

export const PanelProductCta = ({ configLink, linkProps, hasColorOptions = false }) => {
	return (
		<div className="PanelProduct-cta">
			<Link href={configLink.href} as={configLink.as}>
				<a {...linkProps}>
					<strong>
						{
							hasColorOptions &&
							'Continue Designing'
						}
						{
							!hasColorOptions &&
							'Design Yours'
						}
					</strong>
				</a>
			</Link>
		</div>
	);
};
