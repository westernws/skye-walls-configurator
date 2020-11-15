import React from 'react';
import { observer } from 'mobx-react-lite';

import { useMst } from '~/Stores/App.store';

export const ConfigProductImagery = observer(() => {
	const { product } = useMst().page;

	return (
		<>
			<img
				style={{ zIndex: 1 }}
				className="ConfigImage-image"
				src={product.selectedBackground.image.src}
				srcSet={product.selectedBackground.image.srcSet}
				sizes={product.selectedBackground.image.sizes}
				alt=""
			/>
			<img
				className="ConfigImage-image"
				src={product.selectedWall.image.src}
				srcSet={product.selectedWall.image.srcSet}
				sizes={product.selectedWall.image.sizes}
				alt=""
			/>
			<img
				className="ConfigImage-image"
				src={product.selectedFloor.image.src}
				srcSet={product.selectedFloor.image.srcSet}
				sizes={product.selectedFloor.image.sizes}
				alt=""
			/>
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
