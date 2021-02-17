import React from 'react';

import { Provider, appStore } from '~/Stores/App.store';
import { Layout } from '~/Components/Layout';
import { Footer } from '~/Components/Footer';

const Index = () => {
	return (
		<Provider value={appStore}>
			<Layout>
				<main className="MainComponent space-y-6 py-10">
					<img
						className="m-auto block"
						src="https://skyewallsbywws.com/cdn-cgi/image/fit=contain%2Cf=auto%2Cwidth=125%2Cdpr=1%2C/wp-content/themes/skyewalls/images/thumbs-up.png"
						alt=""
						width={125}
						height={169}
						style={{ width: '125px', height: '169px' }}
					/>
					<div className="text-center">
						<h1 className="text-blue text-2xl">Thanks And Hang In There!</h1>
						<p className="text-lg">A Skye Walls expert will be contacting you shortly.</p>
					</div>
				</main>
				<Footer />
			</Layout>
		</Provider>
	);
};

export default Index;
