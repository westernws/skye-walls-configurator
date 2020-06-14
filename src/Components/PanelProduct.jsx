import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { observable, when } from 'mobx';

import { DummyImage } from '~/Components/DummyImage';

// Need MobX when because iPhone refuses to invoke window load event within useEffect.
const isLoaded = observable.box(false);
const onLoadHandler = () => {
	isLoaded.set(true);
};

if (process.browser) {
	window.addEventListener('load', onLoadHandler);
}
export const PanelProduct = ({
	tagName = 'li', title, link, className = '',
}) => {
	const TagName = tagName;
	const [isOpen, setIsOpen] = useState(false);
	const [rootHeight, setRootHeight] = useState('auto');
	const [detailsHeight, setDetailsHeight] = useState('auto');
	const panelProductRef = useRef(null);
	const detailsRef = useRef(null);
	const heroRef = useRef(null);
	const linkProps = {
		className: 'Button w-full',
		...(!isOpen) && {
			// Prevent hidden buttons from showing up when keyboard nav.
			tabIndex: '-1',
		},
	};

	useEffect(() => {
		when(() => isLoaded, () => {
			const deactiveHeight = panelProductRef.current.getBoundingClientRect().height;

			if (rootHeight === 'auto') {
				console.log('deactiveHeight', deactiveHeight);
				setRootHeight(deactiveHeight);
			}
		});
	}, []);
	useEffect(() => {
		if (rootHeight === 'auto') {
			return;
		}
		const { height } = detailsRef.current.getBoundingClientRect();

		// console.log('detailsHeight', height);
		setDetailsHeight(height);
	}, [rootHeight]);

	return (
		<TagName
			ref={panelProductRef}
			className={cn('PanelProduct', className, {
				'is-open': isOpen,
			})}
			style={{
				height: isOpen ? rootHeight + detailsHeight : rootHeight,
			}}
		>
			<div
				onClick={() => { setIsOpen(!isOpen); }}
				className="PanelProduct-hero space-x-3"
				role="presentation"
				ref={heroRef}
			>
				<div className="PanelProduct-heroInside">
					<div className="PanelProduct-img">
						<DummyImage width="420" height="233" />
					</div>
					<h2 className="PanelProduct-title space-x-1 text-xl lg:text-3xl">
						<span>{title}</span>
						<button className="PanelProduct-moreInfo" type="button">
							<img src="/images/info-circle-solid.svg" alt="More Info" />
						</button>
					</h2>
				</div>
			</div>
			<div
				ref={detailsRef}
				className={cn('PanelProduct-details pt-8 space-y-4', {
					hidden: rootHeight === 'auto',
				})}
				aria-hidden={!isOpen}
			>
				<div className="PanelProduct-colorOptions text-xs">
					<h3 className="text-gray-light uppercase">Color Options:</h3>
					<ul className="ColorOptions">
						<li>Black</li>
						<li>Red</li>
						<li>Yellow</li>
					</ul>
				</div>
				<div className="PanelProduct-includes space-y-4 text-xs">
					<h3 className="text-gray-light uppercase">Includes:</h3>
					<ul className="PanelProduct-checklist">
						<li>Include 01</li>
						<li>Include 02</li>
						<li>Include 03</li>
					</ul>
				</div>
				<div className="PanelProduct-cta">
					<Link href={link.href} as={link.as}>
						<a {...linkProps}><strong>Continue Building</strong></a>
					</Link>
				</div>
			</div>
		</TagName>
	);
};
