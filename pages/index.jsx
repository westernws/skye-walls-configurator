import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export const Home = () => {
	return (
		<div className="text-sm md:text-lg">
			<Head>
				<title>Skye Walls Configurator &mdash; Western Window Systems</title>
				<meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1.0" />
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
					content="A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters."
				/>
				<link rel="stylesheet" href="//use.typekit.net/kex0feu.css" />
			</Head>
			<header className="SiteHeader">
				<nav className="SiteNav">
					<div className="SiteNav-wrap">
						<div className="SiteNav-logo">
							<Link href="/">
								<a className="Logo">
									<img src="/images/wws-logo.gif" alt="Western Window Systems" />
								</a>
							</Link>
						</div>
					</div>
				</nav>
				<div className="Hero">
					<img className="Hero-image" src="http://placeimg.com/1000/477/arch" alt="" />
				</div>
			</header>
			<main className="Main">
				<section className="Panel">
					<div className="Panel-intro">
						<div className="w-12/12 md:w-7/12 mt-6">
							<h1 className="HeadingRuled md:text-5xl">Design Your Door</h1>
							<p>
								No two transformations are exactly alike. That’s why we designed moving glass walls from
								Skye Walls to be customizable to your aesthetics and lifestyle.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
