import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { observable, when } from 'mobx';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import resolveConfig from 'tailwindcss/resolveConfig';
import buildMediaQuery from 'tailwindcss/lib/util/buildMediaQuery';
import tailwindConfig from '-/tailwind.config';

import { useMst } from '~/Stores/App.store';
import { DummyImage } from '~/Components/DummyImage';
import { useInput } from '~/util/useInput';
import { ProductSummary } from '~/Components/ProductSummary';

// Need MobX when() because iPhone refuses to invoke window load event within useEffect.
const isLoaded = observable.box(false);
const onLoadHandler = () => {
	isLoaded.set(true);
};
const fullConfig = resolveConfig(tailwindConfig);
const xlMediaQueryStr = buildMediaQuery(fullConfig.theme.screens.xl);
let matchXlMq;

if (process.browser) {
	window.addEventListener('load', onLoadHandler);
	matchXlMq = window.matchMedia(xlMediaQueryStr);
}
export const PanelProduct = observer(({ product }) => {
	const { modal } = useMst();
	const {
		colorOptionGroup, tagName = 'li', displayName, link, className = '', features = [],
	} = product;
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
	const { bind } = useInput();
	const hasColorOptions = Boolean(colorOptionGroup?.options?.length);

	useEffect(() => {
		when(() => isLoaded, () => {
			const deactiveHeight = panelProductRef.current.getBoundingClientRect().height;

			if (rootHeight === 'auto') {
				setRootHeight(deactiveHeight);
			}
		});
	}, []);
	useEffect(() => {
		if (rootHeight === 'auto') {
			return;
		}
		const { height } = detailsRef.current.getBoundingClientRect();

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
				onClick={() => {
					if (matchXlMq?.matches) {
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
					<h2 className="PanelProduct-title space-x-1 text-xl xl:text-2xl xl:space-x-0 xl:space-y-1">
						<span>{displayName}</span>
						<button
							className="PanelProduct-moreInfo"
							type="button"
							onClick={(event) => {
								event.stopPropagation();
								modal.open({
									content: <ProductSummary product={product} />,
								});
							}}
						>
							<span className="hidden text-xs uppercase font-bold xl:inline-block">More Info</span>
							<img className="inline-block xl:hidden" src="/images/info-circle-solid.svg" alt="More Info" />
							<img className="hidden transform -rotate-90 xl:inline-block xl:w-2 xl:ml-1" src="/images/chevron-down-solid.svg" alt="More Info" />
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
				<form className="Form Form--colorOptionsForm space-y-6" method="POST">
					{
						hasColorOptions &&
						<fieldset className="Radio Radio--color text-xs">
							<legend className="Radio-legend text-gray-light uppercase">Color Options:</legend>
							<div className="Radio-group space-x-2 xl:space-x-4">
								{
									colorOptionGroup.options.map((colorOptions) => {
										const id = `${product.name}-${colorOptions.name}-${colorOptionGroup.name}-control-colorOptionsForm`;

										return (
											<div key={id} className="Radio-fieldGroup">
												<input
													type="radio"
													name={`${product.name}-${colorOptionGroup.name}`}
													value={colorOptions.name}
													id={id}
													className="Radio-control"
													defaultChecked={colorOptionGroup.defaultSelected.name === colorOptions.name}
													{...bind}
												/>
												<label
													className="Radio-label"
													htmlFor={id}
													style={{ backgroundColor: `#${colorOptions.hex}` }}
													{...bind}
												>
													<span className="sr-only">{colorOptions.displayName}</span>
												</label>
											</div>
										);
									})
								}
							</div>
						</fieldset>
					}
					{
						Boolean(features.length) &&
						<div className="PanelProduct-includes space-y-4 text-xs">
							<h3 className="text-gray-light uppercase">Includes:</h3>
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
						<Link href={link.href} as={link.as}>
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
		</TagName>
	);
});
