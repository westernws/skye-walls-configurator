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
		<iframe
			src={`https://go.westernwindowsystems.com/l/694473/2021-01-24/4w5vp5?hideComments&productConfig=${selectedOptions}`}
			title="Contact Us"
			className="w-full my-8 mx-auto"
			style={{ minHeight: '300px' }}
		/>
	);
};
