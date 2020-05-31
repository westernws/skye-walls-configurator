import Link from 'next/link';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import noop from 'lodash/noop';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import { useMst } from '~/Stores/App.store';

import { IntersectionObserverFactory } from '~/util/IntersectionObserver';
import { Meta } from '~/Components/Meta';

export const Layout = observer(({ children }) => {
	const { id } = useMst();
	const [isNavSticky, setIsNavSticky] = useState(null);

	console.log(id);
	useEffect(() => {
		if (!process.browser) {
			return noop;
		}
		const iObs = IntersectionObserverFactory.create('#header', ({ intersectionRatio }) => {
			setIsNavSticky(!intersectionRatio);
		});

		return iObs.cleanup;
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
							className={classNames('BackToTop space-x-1', {
								'is-icon-visible': isNavSticky,
							})}
							type="button"
						>
							<img className="BackToTop-icon" src="/images/arrow-alt-circle-up-regular.svg" alt="" aria-hidden />
							<strong className="BackToTop-text">All Models</strong>
						</button>
						<ul className="SiteSubnav-items">
							<li>
								<Link href="/one">
									<a><strong>One</strong></a>
								</Link>
							</li>
							<li>
								<Link href="/two">
									<a><strong>Two</strong></a>
								</Link>
							</li>
							<li>
								<Link href="/three">
									<a><strong>Three</strong></a>
								</Link>
							</li>
							<li>
								<Link href="/Four">
									<a><strong>Four</strong></a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			{children}
		</div>
	);
});
