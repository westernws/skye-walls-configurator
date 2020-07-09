import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';
import { DummyImage } from '~/Components/DummyImage';
import { ProductSummary } from '~/Components/ProductSummary';
import { Color } from '~/Components/Color';
import { InfoCircleSolid } from '~/Components/svg/InfoCircleSolid.svg';

export const PanelProduct = observer(({ product }) => {
	const appStore = useMst();
	const { modals, setActivePanelProduct, isMediaQueryXl } = appStore;
	const {
		isActive, colorOptionGroup, tagName = 'li', displayName, configLink, className = '', features = [],
	} = product;
	const TagName = tagName;
	const [isOpen, setIsOpen] = useState(false);
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
	const hasColorOptions = Boolean(colorOptionGroup?.options?.length);

	useEffect(() => {
		if (isMediaQueryXl) {
			setIsOpen(false);
		}
	}, []);

	let maxHeight;

	if (isMediaQueryXl) {
		maxHeight = 'none';
	} else if (isOpen) {
		maxHeight = '600px';
	} else {
		maxHeight = '0';
	}
	return (
		<TagName
			ref={panelProductRef}
			className={cn('PanelProduct', className, {
				'is-active': isActive,
				'is-open': isOpen,
			})}
			onMouseEnter={() => {
				if (!isMediaQueryXl) {
					return;
				}
				setActivePanelProduct(product);
			}}
		>
			<div
				onClick={() => {
					if (isMediaQueryXl) {
						return;
					}
					setIsOpen(!isOpen);
				}}
				className="PanelProduct-hero space-x-3"
				role="presentation"
				ref={heroRef}
			>
				<div className="PanelProduct-heroInside xl:space-y-4 xl:space-y-reverse">
					<div className="PanelProduct-img">
						<DummyImage width="420" height="233" />
					</div>
					<h2 className="PanelProduct-title space-x-1 text-l sm:text-xl xl:text-2xl xl:space-x-0 xl:space-y-1">
						<span>{displayName}</span>
						<button
							className="PanelProduct-moreInfo"
							type="button"
							onClick={(event) => {
								event.stopPropagation();
								modals.get('modal-primary').open({
									content: <ProductSummary product={product} />,
								});
							}}
						>
							<span className="hidden text-xs uppercase font-bold xl:inline-block">More Info</span>
							<div className="inline-block w-5 xl:hidden">
								<InfoCircleSolid />
							</div>
							<img className="hidden transform -rotate-90 xl:inline-block xl:w-2 xl:ml-1" src="/images/chevron-down-solid.svg" alt="More Info" />
						</button>
					</h2>
				</div>
			</div>
			<div
				className="transition-all duration-500 ease-in-out"
				style={{ maxHeight }}
			>
				<div
					ref={detailsRef}
					className="PanelProduct-details pt-8 space-y-4"
					aria-hidden={!isOpen}
				>
					<form className="Form Form--colorOptionsForm space-y-6" method="POST">
						<Color product={product} />
						{
							Boolean(features.length) &&
							<div className="PanelProduct-includes space-y-4 text-xs">
								<h3 className="text-gray-light uppercase">
									Includes:
									{
										Boolean(product.inheritedFeatures) &&
										<strong className="uppercase font-bold text-base text-black pl-1">
											{product.inheritedFeatures}
										</strong>
									}
								</h3>
								<ul className="Checklist">
									{
										features.map(feature => (
											<li key={feature}>{feature}</li>
										))
									}
								</ul>
							</div>
						}
						<div className="PanelProduct-cta">
							<Link href={configLink.href} as={configLink.as}>
								<a {...linkProps}>
									<strong>
										{
											hasColorOptions &&
											'Continue Building'
										}
										{
											!hasColorOptions &&
											'Design Yours'
										}
									</strong>
								</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</TagName>
	);
});
