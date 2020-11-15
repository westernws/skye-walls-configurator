import React from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import { useMst } from '~/Stores/App.store';

export const ConfigProductImagery = observer(() => {
	const { product } = useMst().page;

	return (
		<>
			<Image
				style={{ zIndex: 1 }}
				className="ConfigImage-image"
				src={product.selectedBackground.image.src}
				layout="fill"
				sizes={product.selectedBackground.image.sizes}
				alt=""
			/>
			<Image
				className="ConfigImage-image"
				src={product.selectedWall.image.src}
				layout="fill"
				sizes={product.selectedWall.image.sizes}
				alt=""
			/>
			<Image
				className="ConfigImage-image"
				src={product.selectedFloor.image.src}
				layout="fill"
				sizes={product.selectedFloor.image.sizes}
				alt=""
			/>
			<Image
				style={{ zIndex: 2 }}
				className="ConfigImage-image"
				src={product.src}
				sizes={product.sizes}
				layout="fill"
				alt=""
			/>
		</>
	);
});
