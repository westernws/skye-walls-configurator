import React from 'react';
import Link from 'next/link';

import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';

export const MenuListItem = ({
	onClick = null, Icon = null, label, link = null,
}) => {
	const isLink = Boolean(link);
	const TagName = isLink ? Link : 'button';
	const tagProps = {
		...(!isLink) && {
			type: 'button',
			className: 'Menu-heading',
			onClick,
		},
		...(isLink) && {
			...link,
		},
	};
	const insides = (
		<>
			<div className="Menu-leftCol">
				<div className="Menu-labelIcon"><Icon /></div>
				<div className="Menu-label">{label}</div>
			</div>
			<div className="Menu-rightCol">
				<div className="Menu-control">
					<ChevronSolid direction="right" />
				</div>
			</div>
		</>
	);
	const elem = !isLink ? insides : (
		<a className="Menu-heading" href={link.href}>{insides}</a>
	);

	return (
		<li className="Menu-item">
			<TagName {...tagProps}>
				{elem}
			</TagName>
		</li>
	);
};
