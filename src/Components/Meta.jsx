import React from 'react';
import Head from 'next/head';

export const Meta = () => {
	return (
		<Head>
			<title>Skye Walls Builder &mdash; Western Window Systems</title>
			<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

			{/* COMMON TAGS */}
			<meta charset="utf-8" />
			{/* Search Engine */}
			<meta name="description" content="Build your own Skye Walls environment" />
			{/* Schema.org for Google */}
			<meta itemProp="name" content="Skye Walls Builder" />
			<meta itemProp="description" content="Build your own Skye Walls environment" />
			{/* Open Graph general (Facebook, Pinterest & Google+) */}
			<meta name="og:title" content="Skye Walls Builder" />
			<meta name="og:description" content="Build your own Skye Walls environment" />
			<meta name="og:url" content="https://build.skyewallsbywws.com" />
			<meta name="og:site_name" content="Skye Walls Builder" />
			<meta name="og:type" content="website" />

			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			<meta name="msapplication-TileColor" content="#2d89ef" />
			<meta name="theme-color" content="#ffffff" />

			<link rel="stylesheet preload" href="//use.typekit.net/kex0feu.css" />
		</Head>
	);
};
