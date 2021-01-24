import React from 'react';

import { useMst } from '~/Stores/App.store';

export const ContactUs = () => {
	const {
		page: {
			product: {
				selectedOptions = 'unknown',
			} = {},
		} = {},
	} = useMst();

	return (
		<>
			<p>Have a question? Send us an email and we’ll get back to you shortly.</p>
			<iframe
				src={`https://go.westernwindowsystems.com/l/694473/2020-07-07/38mf5j?hideComments&productConfig=${selectedOptions}`}
				title="Contact Us"
				className="w-full my-8 mx-auto"
				style={{ minHeight: '300px' }}
			/>
		</>
	);
};
