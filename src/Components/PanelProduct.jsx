import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import delay from 'lodash/delay';

import { DummyImage } from '~/Components/DummyImage';

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
			tabIndex: '-1',
		},
	};

	useEffect(() => {
		const onLoadHandler = () => {
			const deactiveHeight = panelProductRef.current.getBoundingClientRect().height;
			if (rootHeight === 'auto') {
				console.log('deactiveHeight', deactiveHeight);
				setRootHeight(deactiveHeight);
			}
		};

		// delay(onLoadHandler, 1000);
		window.addEventListener('load', onLoadHandler);
		return () => {
			window.removeEventListener('load', onLoadHandler);
		};
	}, []);
	useEffect(() => {
		if (rootHeight === 'auto') {
			return;
		}
		const { height } = detailsRef.current.getBoundingClientRect();

		console.log('detailsHeight', height);
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
						<a {...linkProps}><strong>Continue Building</strong></a>
					</Link>
				</div>
			</div>
		</TagName>
	);
};
