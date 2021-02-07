import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { Meta } from '~/Components/Meta';
import { useMst } from '~/Stores/App.store';
import { Modals } from '~/Components/Modals';
import { BarsSolid } from '~/Components/svg/BarsSolid.svg';
import { TimesSolid } from '~/Components/svg/TimesSolid.svg';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';
import { ExternalLinkAltSolid } from '~/Components/svg/ExternalLinkAltSolid.svg';
import { HomeSolid } from '~/Components/svg/HomeSolid.svg';
import { themeConfig } from '~/util/themeConfig';

export const Layout = observer(({ children }) => {
	const { modals } = useMst();
	const menu = modals.get('modal-menu');

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
								<a href="https://skyewallsbywws.com/" className="Logo">
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
							</div>
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
															<li className="Menu-item">
																<Link href="/">
																	<a className="Menu-heading">
																		<div className="Menu-leftCol">
																			<div className="Menu-labelIcon w-4">
																				<HomeSolid />
																			</div>
																			<div className="Menu-label">Design Your Door</div>
																		</div>
																		<div className="Menu-rightCol">
																			<div className="Menu-control">
																				<ChevronSolid direction="right" />
																			</div>
																		</div>
																	</a>
																</Link>
															</li>
															<li className="Menu-item">
																<a href="https://skyewallsbywws.com/real-stories/" className="Menu-heading">
																	<div className="Menu-leftCol">
																		<div className="Menu-labelIcon w-4">
																			<ExternalLinkAltSolid />
																		</div>
																		<div className="Menu-label">Real Stories</div>
																	</div>
																	<div className="Menu-rightCol">
																		<div className="Menu-control">
																			<ChevronSolid direction="right" />
																		</div>
																	</div>
																</a>
															</li>
															<li className="Menu-item">
																<a href="https://skyewallsbywws.com/tips-and-advice/" className="Menu-heading">
																	<div className="Menu-leftCol">
																		<div className="Menu-labelIcon w-4">
																			<ExternalLinkAltSolid />
																		</div>
																		<div className="Menu-label">Tips & Advice</div>
																	</div>
																	<div className="Menu-rightCol">
																		<div className="Menu-control">
																			<ChevronSolid direction="right" />
																		</div>
																	</div>
																</a>
															</li>
															<li className="Menu-item">
																<a href="https://skyewallsbywws.com/contact/" className="Menu-heading">
																	<div className="Menu-leftCol">
																		<div className="Menu-labelIcon w-4">
																			<ExternalLinkAltSolid />
																		</div>
																		<div className="Menu-label">Contact</div>
																	</div>
																	<div className="Menu-rightCol">
																		<div className="Menu-control">
																			<ChevronSolid direction="right" />
																		</div>
																	</div>
																</a>
															</li>
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
							<nav className="hidden xl:block">
								<ul className="flex px-4 space-x-6 text-base">
									<li className="font-bold text-blue">
										<Link href="/">
											<a>Design Your Door</a>
										</Link>
									</li>
									<li className="font-bold text-blue">
										<a href="https://skyewallsbywws.com/real-stories/">Real Stories</a>
									</li>
									<li className="font-bold text-blue">
										<a href="https://skyewallsbywws.com/tips-and-advice/">Tips & Advice</a>
									</li>
									<li className="font-bold text-blue">
										<a href="https://skyewallsbywws.com/contact/">Contact</a>
									</li>
								</ul>
							</nav>
						</div>
					</nav>
				</header>
				{children}
			</div>
		</>
	);
});
