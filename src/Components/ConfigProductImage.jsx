import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';

export const ConfigProductImage = observer(() => {
	const { product } = useMst().page;

	return (
		<img src={product.imageSrc} alt="" />
	);
});
