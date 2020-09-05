import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';

export const ConfigProductImagery = observer(() => {
	const { product } = useMst().page;

	return (
		<>
			<img className="ConfigImage-image" style={{ zIndex: 1 }} src={product.selectedBackground.image.src} alt="" />
			<img className="ConfigImage-image" src={product.selectedWall.image.src} alt="" />
			<img className="ConfigImage-image" src={product.selectedFloor.image.src} alt="" />
			<img
				style={{ zIndex: 2 }}
				className="ConfigImage-image"
				src={product.src}
				srcSet={product.srcSet}
				sizes={product.sizes}
				alt=""
			/>
		</>
	);
});
