import React from 'react';
// import { useStaticRendering } from 'mobx-react-lite';

import '#/main.scss';

// This is here to suppress SSR warnings.
// See https://github.com/mobxjs/mobx-react#server-side-rendering-with-enablestaticrendering
// Once https://github.com/mobxjs/mobx-state-tree/issues/1588 get's merged in you can start using mobx ^6.0.0
// useStaticRendering(true);

export default function SkyeConfigurator({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			{/* Hotjar Tracking Code for https://build.skyewallsbywws.com */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
					    (function(h,o,t,j,a,r){
					        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
					        h._hjSettings={hjid:2234900,hjsv:6};
					        a=o.getElementsByTagName('head')[0];
					        r=o.createElement('script');r.async=1;
					        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
					        a.appendChild(r);
					    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
					`,
				}}
			/>
		</>
	);
}
