import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';

export const Home = () => {
	const [isNavSticky, setIsNavSticky] = useState(null);

	useEffect(() => {
		if (!process.browser) {
			return () => {};
		}
		let boxElement;
		let prevRatio = 0.0;
		const handleIntersect = (entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > prevRatio) {
					console.log('appearing', entry.intersectionRatio);
				} else {
					console.log('dissappearing', entry.intersectionRatio);
				}
				setIsNavSticky(!entry.intersectionRatio);
				prevRatio = entry.intersectionRatio;
			});
		};
		const buildThresholdList = () => {
			const thresholds = [];
			const numSteps = 100;

			for (let i = 1.0; i <= numSteps; i += 1) {
				const ratio = i / numSteps;
				thresholds.push(ratio);
			}

			thresholds.push(0);
			return thresholds;
		};
		const createObserver = () => {
			const options = {
				root: null,
				rootMargin: '0px',
				threshold: buildThresholdList(),
			};
			const observer = new IntersectionObserver(handleIntersect, options);

			observer.observe(boxElement);
		};
		const onLoadHandler = () => {
			boxElement = document.querySelector('#header');

			createObserver();
		};

		window.addEventListener('load', onLoadHandler, false);
		return () => {
			console.log('cleaning up!');
			window.removeEventListener('load', onLoadHandler);
		};
	}, []);

	return (
		<div className="text-sm md:text-lg">
			<Head>
				<title>Skye Walls Configurator &mdash; Western Window Systems</title>
				<meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, minimum-scale=1" />
				<meta name="description" content="FPO" />
				<meta name="google" content="nositelinkssearchbox" />
				<meta property="og:url" content="https://example.com/page.html" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Content Title" />
				<meta property="og:image" content="https://example.com/image.jpg" />
				<meta property="og:image:alt" content="A description of what is in the image (not a caption)" />
				<meta property="og:description" content="Description Here" />
				<meta property="og:site_name" content="Site Name" />
				<meta property="og:locale" content="en_US" />
				<meta property="article:author" content="" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@site_account" />
				<meta name="twitter:creator" content="@individual_account" />
				<meta name="twitter:url" content="https://example.com/page.html" />
				<meta name="twitter:title" content="Content Title" />
				<meta name="twitter:description" content="Content description less than 200 characters" />
				<meta name="twitter:image" content="https://example.com/image.jpg" />
				<meta
					name="twitter:image:alt"
					content="A text description of the image conveying the essential nature of an image to users who are
					visually impaired. Maximum 420 characters."
				/>
				<link rel="stylesheet" href="//use.typekit.net/kex0feu.css" />
			</Head>
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
			<div className={classNames('bg-black hidden xxl:block', {
				// 'z-10': isNavSticky,
				// 'fixed': isNavSticky,
				// 'w-full': isNavSticky,
				// 'top-0': isNavSticky,
				'is-nav-sticky': isNavSticky,
			})}
			>
				<nav className="SiteSubnav">
					<div className="SiteSubnav-wrap space-x-10">
						<button className="BackToTop space-x-1" type="button">
							<img className="Icon" src="/images/arrow-alt-circle-up-regular.svg" alt="" aria-hidden />
							<strong>All Models</strong>
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
			<div className="Hero">
				<img className="Hero-image" src="http://placeimg.com/1600/477/arch" alt="" />
			</div>
			<main className="Main space-y-20">
				<section className="flex justify-center mb-10">
					<div className="w-12/12 md:w-7/12 mt-6">
						<h1 className="Heading Heading--ruled md:text-5xl">Design Your Door</h1>
						<p className="max-w-xl">
							No two transformations are exactly alike. That’s why we designed moving glass walls from
							Skye Walls to be customizable to your aesthetics and lifestyle.
						</p>
					</div>
				</section>
				<section className="space-y-20">
					<div className="space-y-12">
						<h2 className="Heading Heading--bordered">
							<span className="Heading-rule" />
							Sliding
							<span className="Heading-rule" />
						</h2>
						<div className="flex justify-center">
							<div className="w-12/12 md:w-7/12">
								<p>
									Also called multi-slide or panoramic doors, our sliding doors feature large panels
									that slide open and stack or tuck away out of sight to connect the indoors with the
									outside. Panels can move in one direction or part in the center.
								</p>
							</div>
						</div>
						<div className="PanelGroup">
							<div className="Panel" />
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
