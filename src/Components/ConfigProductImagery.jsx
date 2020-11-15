import React from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import { useMst } from '~/Stores/App.store';

export const ConfigProductImagery = observer(() => {
	const { product } = useMst().page;

	return (
		<>
			<Image
				className="ConfigImage-imageBackground"
				src={product.selectedBackground.image.src}
				srcSet={product.selectedBackground.image.srcSet}
				layout="fill"
				unoptimized
				loading="eager"
				priority
				sizes={product.selectedBackground.image.sizes}
				alt=""
			/>
			<Image
				className="ConfigImage-image"
				src={product.selectedWall.image.src}
				srcSet={product.selectedWall.image.srcSet}
				layout="fill"
				unoptimized
				loading="eager"
				priority
				sizes={product.selectedWall.image.sizes}
				alt=""
			/>
			<Image
				className="ConfigImage-image"
				src={product.selectedFloor.image.src}
				srcSet={product.selectedFloor.image.srcSet}
				layout="fill"
				unoptimized
				loading="eager"
				priority
				sizes={product.selectedFloor.image.sizes}
				alt=""
			/>
			<Image
				className="ConfigImage-imageProduct"
				src={product.src}
				srcSet={product.srcSet}
				sizes={product.sizes}
				layout="fill"
				unoptimized
				loading="eager"
				priority
				alt=""
			/>
		</>
	);
});
