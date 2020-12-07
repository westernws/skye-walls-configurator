import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import { useMst } from '~/Stores/App.store';

export const ConfigProductImagery = observer(() => {
	const { product } = useMst().page;
	const canvasRef = useRef(null);
	const wallColorRef = useRef(null);

	useEffect(() => {
		const wallColor = wallColorRef.current;
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		context.beginPath();
		context.rect(0, 0, context.canvas.width, context.canvas.height);
		context.fillStyle = `#${product.selectedWall.hex}`;
		context.fill();
		wallColor.src = canvas.toDataURL();
	}, [product.selectedWall.hex]);

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
			<canvas
				ref={canvasRef}
				data-hex={product.selectedWall.hex}
				className="hidden"
				// Keep this relatively small but maintain aspect ratio
				width="123"
				height="101"
			/>
			<img
				ref={wallColorRef}
				src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
				alt=""
				className="ConfigImage-imageWall"
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
