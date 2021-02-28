import React from 'react';
import Head from 'next/head';

export const Meta = () => {
	return (
		<Head>
			<link rel="preload" as="style" href="//use.typekit.net/kex0feu.css" />
			<title>Skye Walls Builder &mdash; Western Window Systems</title>
			<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

			{/* COMMON TAGS */}
			<meta charSet="utf-8" />
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

			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

			<link rel="stylesheet" href="//use.typekit.net/kex0feu.css" />
		</Head>
	);
};
