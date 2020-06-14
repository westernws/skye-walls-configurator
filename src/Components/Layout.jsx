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

export const Layout = observer(({ children }) => {
	const { productCollections } = useMst();
	const [isNavSticky, setIsNavSticky] = useState(null);
	const [activeMenu, setActiveMenu] = useState(null);

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
		<div className="text-sm md:text-lg h-full">
			<Meta />
			<header id="header" className="Header">
				<nav className="SiteNav">
					<div className="SiteNav-wrap">
						<div className="SiteNav-logo">
							<Link href="/">
								<a className="Logo">
									<img src="/images/sw-logo-lite.svg" alt="Skye Walls Replacement Moving Glass Walls and Windows by Western Window Systems" />
								</a>
							</Link>
						</div>
						<ul className="SiteNav-menu 2xl:hidden">
							<li>
								<Link href="#">
									<a>
										<div className="Icon">
											<img src="/images/bars-solid.svg" alt="Menu" />
											<span>Menu</span>
										</div>
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
			<div className="sticky top-0 z-10 bg-black hidden 2xl:block">
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
	);
});
