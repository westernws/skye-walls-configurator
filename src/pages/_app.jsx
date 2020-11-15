import React from 'react';
// import { useStaticRendering } from 'mobx-react-lite';

import '#/main.scss';

// This is here to suppress SSR warnings.
// See https://github.com/mobxjs/mobx-react#server-side-rendering-with-enablestaticrendering
// Once https://github.com/mobxjs/mobx-state-tree/issues/1588 get's merged in you can start using mobx ^6.0.0
// useStaticRendering(true);

export default function SkyeConfigurator({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
