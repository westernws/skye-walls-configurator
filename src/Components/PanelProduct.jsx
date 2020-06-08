import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { DummyImage } from '~/Components/DummyImage';

export const PanelProduct = ({
	tagName = 'li', title, link, className = '',
}) => {
	const TagName = tagName;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<TagName
			onClick={() => { setIsOpen(!isOpen); }}
			className={cn('PanelProduct space-y-2', className, {
				'is-open': isOpen,
			})}
		>
			<div className="PanelProduct-hero space-x-3 flex items-start">
				<div className="PanelProduct-img">
					<DummyImage width="420" height="233" />
				</div>
				<h2 className="PanelProduct-title space-x-1 text-xl lg:text-3xl">
					<span>{title}</span>
					<button className="PanelProduct-moreInfo inline-block w-4" type="button">
						<img src="/images/info-circle-solid.svg" alt="More Info" />
					</button>
				</h2>
			</div>
			<div className="PanelProduct-details space-y-4">
				<div className="PanelProduct-colorOptions">
					<h3 className="text-gray-light mt-4">Color Options:</h3>
					<ul className="text-xs">
						<li>Black</li>
						<li>Red</li>
						<li>Yellow</li>
					</ul>
				</div>
				<div className="PanelProduct-includes space-y-4">
					<h3 className="text-gray-light">Includes:</h3>
					<ul className="PanelProduct-checklist text-xs">
						<li>Include 01</li>
						<li>Include 02</li>
						<li>Include 03</li>
					</ul>
				</div>
				<div className="PanelProduct-cta">
					<Link href={link.href} as={link.as}>
						<a className="Button w-full" type="button"><strong>Continue Building</strong></a>
					</Link>
				</div>
			</div>
		</TagName>
	);
};
