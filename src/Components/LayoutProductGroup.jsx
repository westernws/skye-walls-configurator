import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { Meta } from '~/Components/Meta';
import { Modals } from '~/Components/Modals';

export const LayoutProductGroup = observer(({ children }) => {
	return (
		<>
			<Modals />
			<div>
				<Meta />
				<header id="header" className="Header">
					<nav className="SiteNav">
						<div className="SiteNav-wrap">
							<div className="SiteNav-logo">
								<Link href="/">
									<a className="Logo">
										<Image
											src="/images/sw-logo-lite.svg"
											alt="Skye Walls Replacement Moving Glass Walls and Windows by Western Window Systems"
											priority
											unoptimized
											loading="eager"
											width="120"
											height="37"
										/>
									</a>
								</Link>
							</div>
						</div>
					</nav>
				</header>
				{children}
			</div>
		</>
	);
});
