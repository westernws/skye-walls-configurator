import React from 'react';
import Head from 'next/head';

export const Meta = () => {
	return (
		<Head>
			<link rel="preload" as="style" href="//use.typekit.net/kex0feu.css" />
			<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
			<meta charSet="utf-8" />
			{/* Schema.org for Google */}
			<meta itemProp="name" content="Skye Walls Builder" />
			<meta itemProp="description" content="Build your own Skye Walls environment" />

			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

			<link rel="stylesheet" href="//use.typekit.net/kex0feu.css" />
		</Head>
	);
};
