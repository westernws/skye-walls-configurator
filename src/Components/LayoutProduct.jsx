import Link from 'next/link';
import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { Meta } from '~/Components/Meta';

export const LayoutProduct = observer(({ children }) => {
	return (
		<div className="text-sm md:text-lg bg-gray-lighter h-full">
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
					</div>
				</nav>
			</header>
			{children}
		</div>
	);
});
