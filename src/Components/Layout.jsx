import Link from 'next/link';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import noop from 'lodash/noop';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import upperCase from 'lodash/upperCase';
import snakeCase from 'lodash/snakeCase';

import { IntersectionObserverFactory } from '~/util/IntersectionObserver';
import { Meta } from '~/Components/Meta';
import { useMst } from '~/Stores/App.store';
import { Modals } from '~/Components/Modals';
import { BarsSolid } from '~/Components/svg/BarsSolid.svg';
import { TimesSolid } from '~/Components/svg/TimesSolid.svg';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';
import { themeConfig } from '~/util/themeConfig';

export const Layout = observer(({ children }) => {
	const { productCollections, modals, topMenu = [] } = useMst();
	const [isNavSticky, setIsNavSticky] = useState(null);
	const [activeMenu, setActiveMenu] = useState(null);
	const menu = modals.get('modal-menu');

	useEffect(() => {
		if (!process.browser) {
			return noop;
		}
		const observers = [];

		observers.push(
			IntersectionObserverFactory.create('#header', ({ intersectionRatio }) => {
				setIsNavSticky(!intersectionRatio);
			}),
		);
		productCollections.forEach((collection) => {
			observers.push(
				IntersectionObserverFactory.create(`#${collection.name}`, ({ intersectionRatio, prevRatio }) => {
					const name = snakeCase(upperCase(collection.name));

					if (intersectionRatio > prevRatio) {
						setActiveMenu(name);
					} else if (prevRatio && intersectionRatio > prevRatio) {
						setActiveMenu(name);
					}
				}, {
					threshold: [0.25, 1],
				}),
			);
		});

		return () => {
			observers.forEach((obs) => {
				obs.cleanup();
			});
		};
	}, []);

	return (
		<>
			<Modals />
			<div>
				<Meta />
				<header
					id="header"
					className={cn('Header relative', {
						'z-10': menu.isOpen,
					})}
				>
					<nav className="SiteNav">
						<div className="SiteNav-wrap">
							<div className="SiteNav-logo">
								<Link href="/">
									<a className="Logo">
										<img src="/images/sw-logo-lite.svg" alt="Skye Walls Replacement Moving Glass Walls and Windows by Western Window Systems" />
									</a>
								</Link>
							</div>
							{
								Boolean(topMenu.length) &&
								<ul className="Menu xl:hidden">
									<li>
										<button
											type="button"
											onClick={() => {
												modals.get('modal-primary').close();
												modals.get('modal-secondary').close();
												if (menu.isOpen) {
													menu.close();
												} else {
													menu.open({
														content: (
															<ul className="Menu-items divide-y-2 divide-gray-lighter">
																{
																	topMenu.map((menuItem) => {
																		const {
																			href = '',
																			name = '',
																			displayName = '',
																			isExternal = false,
																		} = menuItem;
																		const anchorProps = {
																			className: 'Menu-heading',
																			...(isExternal) && {
																				href,
																			},
																		};
																		const anchorChildren = (
																			<>
																				<div className="Menu-leftCol">
																					<div className="Menu-label">{displayName}</div>
																				</div>
																				<div className="Menu-rightCol">
																					<div className="Menu-control">
																						<ChevronSolid direction="right" />
																					</div>
																				</div>
																			</>
																		);

																		return (
																			<li key={name} className="Menu-item">
																				{
																					isExternal ?
																						<a {...anchorProps}>
																							{anchorChildren}
																						</a>
																						:
																						<Link href={href}>
																							<a {...anchorProps}>
																								{anchorChildren}
																							</a>
																						</Link>
																				}
																			</li>
																		);
																	})
																}
															</ul>
														),
														type: 'MENU',
													});
												}
											}}
										>
											<div className={cn('Icon', {
												'Icon--sm': menu.isOpen,
											})}
											>
												{
													menu.isOpen &&
													<TimesSolid color={themeConfig.theme.colors.gray.default} />
												}
												{
													!menu.isOpen &&
													<BarsSolid />
												}
											</div>
											{
												menu.isOpen &&
												<span>Close</span>
											}
											{
												!menu.isOpen &&
												<span>Menu</span>
											}
										</button>
									</li>
								</ul>
							}
						</div>
					</nav>
				</header>
				<div className="sticky top-0 z-10 bg-black hidden xl:block">
					<nav className="SiteSubnav">
						<div className="SiteSubnav-wrap space-x-10">
							<button
								className={cn('BackToTop space-x-1', {
									'is-icon-visible': isNavSticky,
								})}
								type="button"
								onClick={() => {
									window.scrollTo(0, 0);
								}}
							>
								<img className="BackToTop-icon" src="/images/arrow-alt-circle-up-regular.svg" alt="" aria-hidden />
								<strong className="BackToTop-text">All Models</strong>
							</button>
							<ul className="SiteSubnav-items">
								{
									productCollections.map((collection) => {
										return (
											<li key={collection.name}>
												<Link href={`#${collection.name}`}>
													<a
														data-collection={collection.name}
														className={cn('uppercase', {
															'is-active': activeMenu === snakeCase(upperCase(collection.name)),
														})}
													>
														<strong>{collection.displayName}</strong>
													</a>
												</Link>
											</li>
										);
									})
								}
							</ul>
						</div>
					</nav>
				</div>
				{children}
			</div>
		</>
	);
});
