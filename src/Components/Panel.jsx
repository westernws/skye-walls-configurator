import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { DummyImage } from '~/Components/DummyImage';

export const Panel = ({
	tagName = 'li', title, shortDesc, link, className = '',
}) => {
	const TagName = tagName;

	return (
		<TagName className={cn('Panel space-y-6', className)}>
			<div className="Panel-details space-y-6">
				<div className="Panel-img w-full">
					<DummyImage width="720" height="546" />
				</div>
				<h2 className="Panel-title text-2xl lg:text-3xl">{title}</h2>
				<p className="Panel-short-desc">{shortDesc}</p>
			</div>
			<div className="Panel-cta">
				<Link href={link.href} as={link.as}>
					<a className="Button w-full" type="button"><strong>Design Yours</strong></a>
				</Link>
			</div>
		</TagName>
	);
};
