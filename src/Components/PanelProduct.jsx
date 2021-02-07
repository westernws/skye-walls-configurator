import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import { useMst } from '~/Stores/App.store';
import { Color } from '~/Components/Color';
import { getHeightByAspectRatio } from '~/util/getHeightByAspectRatio';
import { PanelProductCta } from '~/Components/PanelProductCta';

export const PanelProduct = observer(({ product }) => {
	const appStore = useMst();
	const { setActivePanelProduct, isMediaQueryXl } = appStore;
	const {
		isActive,
		colorOptionGroup,
		tagName = 'li',
		displayName,
		description = '',
		configLink,
		className = '',
		features = [],
		illustrationImage,
		illustrationAnimatedImage,
	} = product;
	const TagName = tagName;
	const [isOpen, setIsOpen] = useState(false);
	const panelProductRef = useRef(null);
	const detailsRef = useRef(null);
	const heroRef = useRef(null);
	const linkProps = {
		className: 'ButtonHollow w-full mt-12 xl:mt-0',
		...(!isOpen) && {
			// Prevent hidden buttons from showing up when keyboard nav.
			tabIndex: '-1',
		},
	};
	const productGroupImageWidth = 144;
	const productGroupImageHeight = getHeightByAspectRatio(productGroupImageWidth, illustrationImage.aspectRatio);
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
		maxHeight = '750px';
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
				<div className="PanelProduct-heroInside xl:space-y-reverse">
					<div className="PanelProduct-imgContainer">
						<div className="PanelProduct-image">
							<Image
								src={illustrationImage.src}
								width={productGroupImageWidth}
								height={productGroupImageHeight}
								layout="responsive"
								alt=""
							/>
						</div>
						<div className="PanelProduct-animatedImage">
							<Image
								src={illustrationAnimatedImage.src}
								width={productGroupImageWidth}
								height={productGroupImageHeight}
								layout="responsive"
								alt=""
							/>
						</div>
					</div>
					<div className="PanelProduct-titleTall pl-4 xl:pl-0 space-y-3">
						<h2 className="text-l sm:text-xl xl:text-2xl">
							<span>{displayName}</span>
						</h2>
						<p className="PanelProduct-description">{description}</p>
					</div>
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
							<div className="PanelProduct-includes space-y-4">
								<h3 className="font-bold text-sm">
									Features:
								</h3>
								{
									Boolean(product.inheritedFeatures) &&
									<strong className="font-bold text-sm text-blue">
										{product.inheritedFeatures}:
									</strong>
								}
								<ul className="list-disc text-xs ml-4 space-y-2 xl:text-sm">
									{
										features.map(feature => (
											<li key={feature}>{feature}</li>
										))
									}
								</ul>
							</div>
						}
						<div className="Divider" />
						{
							!isMediaQueryXl &&
							<PanelProductCta
								configLink={configLink}
								linkProps={linkProps}
								hasColorOptions={hasColorOptions}
							/>
						}
					</form>
				</div>
				{
					isMediaQueryXl &&
					<PanelProductCta
						configLink={configLink}
						linkProps={linkProps}
						hasColorOptions={hasColorOptions}
					/>
				}
			</div>
		</TagName>
	);
});
