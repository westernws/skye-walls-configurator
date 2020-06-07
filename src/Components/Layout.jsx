import Link from 'next/link';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import noop from 'lodash/noop';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { IntersectionObserverFactory } from '~/util/IntersectionObserver';
import { Meta } from '~/Components/Meta';
import { useMst } from '~/Stores/App.store';

export const Layout = observer(({ children }) => {
	const { productCollections } = useMst();
	const [isNavSticky, setIsNavSticky] = useState(null);
	const [isSlidingActive, setIsSlidingActive] = useState(null);

	useEffect(() => {
		if (!process.browser) {
			return noop;
		}
		const iObs = IntersectionObserverFactory.create('#header', ({ intersectionRatio }) => {
			setIsNavSticky(!intersectionRatio);
		});
		const iObs2 = IntersectionObserverFactory.create('#sliding', ({ intersectionRatio }) => {
			setIsSlidingActive(intersectionRatio);
		});

		return () => {
			iObs.cleanup();
			iObs2.cleanup();
		};
	}, []);

	return (
		<div className="text-sm md:text-lg">
			<Meta />
			<header id="header" className="Header">
				<nav className="SiteNav">
					<div className="SiteNav-wrap">
						<div className="SiteNav-logo">
							<Link href="/">
								<a className="Logo">
									<img src="/images/wws-logo.gif" alt="Western Window Systems" />
								</a>
							</Link>
						</div>
						<ul className="SiteNav-menu xxl:hidden">
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
			<div className="sticky top-0 z-10 bg-black hidden xxl:block">
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
														'is-active': isSlidingActive,
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
