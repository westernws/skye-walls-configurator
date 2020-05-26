import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import noop from 'lodash/noop';
import classNames from 'classnames';

import { IntersectionObserverFactory } from '~/util/IntersectionObserver';
import { Meta } from '~/Components/Meta';
import { BackToTop } from '~/Components/BackToTop';

import siteNavStyles from '~/styles/SiteNav.module.css';
import siteSubnavStyles from '~/styles/SiteSubnav.module.css';

export const Layout = ({ children }) => {
	const [isNavSticky, setIsNavSticky] = useState(null);

	useEffect(() => {
		if (!process.browser) {
			return noop;
		}
		const obs = IntersectionObserverFactory.create('#header', ({ intersectionRatio }) => {
			setIsNavSticky(!intersectionRatio);
		});

		return obs.cleanup;
	}, []);

	return (
		<div className="text-sm md:text-lg">
			<Meta />
			<header id="header" className="Header">
				<nav className={siteNavStyles.SiteNav}>
					<div className={siteNavStyles['SiteNav-wrap']}>
						<div className={siteNavStyles['SiteNav-logo']}>
							<Link href="/">
								<a className="Logo">
									<img src="/images/wws-logo.gif" alt="Western Window Systems" />
								</a>
							</Link>
						</div>
						<ul className={classNames(siteNavStyles['SiteNav-menu'], 'xxl:hidden')}>
							<li>
								<Link href="#">
									<a>
										<div className="Icon">
											<img src="/images/bars-solid.svg" alt="Menu" />
											<span>Other</span>
										</div>
									</a>
								</Link>
							</li>
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
				<nav className={siteSubnavStyles.SiteSubnav}>
					<div className={classNames(siteSubnavStyles['SiteSubnav-wrap'], 'space-x-10')}>
						<BackToTop isIconVisible={isNavSticky} />
						<ul className={siteSubnavStyles['SiteSubnav-items']}>
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
};
