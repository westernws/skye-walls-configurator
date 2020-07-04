import React from 'react';

import { Provider, appStore } from '~/Stores/App.store';
import { LayoutConfig } from '~/Components/LayoutConfig';

export default () => {
	return (
		<Provider value={appStore}>
			<LayoutConfig>
				<h1>Config</h1>
			</LayoutConfig>
		</Provider>
	);
};
