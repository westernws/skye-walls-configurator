import React from 'react';

import '#/main.scss';

// This is here to suppress SSR warnings.
// See https://github.com/mobxjs/mobx-react#server-side-rendering-with-enablestaticrendering
// Once https://github.com/mobxjs/mobx-state-tree/issues/1588 get's merged in you can start using mobx ^6.0.0
// useStaticRendering(true);

export default function SkyeConfigurator({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			{/* Init dataLayer and Google Tag Manager */}
			<script
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = [];
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-KDGZ4T2');
					`,
				}}
			/>
		</>
	);
}
