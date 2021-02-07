import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import { useMst } from '~/Stores/App.store';

export const ConfigProductImagery = observer(() => {
	const {
		product,
		product: {
			selectedBackground: {
				image: {
					src: bgSrc = '',
					srcSet: bgSrcSet = '',
					sizes: bgSizes = '',
				} = {},
			} = {},
			selectedFloor: {
				image: {
					src: floorSrc = '',
					srcSet: floorSrcSet = '',
					sizes: floorSizes = '',
				} = {},
			} = {},
			selectedWall: {
				hex: wallHex = '',
			} = {},
			src = '',
			srcSet = '',
			sizes = '',
		} = {},
	} = useMst().page;
	const canvasRef = useRef(null);
	const wallColorRef = useRef(null);

	useEffect(() => {
		const wallColor = wallColorRef.current;
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		context.beginPath();
		context.rect(0, 0, context.canvas.width, context.canvas.height);
		context.fillStyle = `#${wallHex || 'fff'}`;
		context.fill();
		wallColor.src = canvas.toDataURL();
	}, [product.selectedWall.hex]);

	return (
		<>
			{
				Boolean(bgSrc && bgSrcSet && bgSizes) &&
				<Image
					className="ConfigImage-imageBackground"
					src={bgSrc}
					srcSet={bgSrcSet}
					layout="fill"
					unoptimized
					loading="eager"
					priority
					sizes={bgSizes}
					alt=""
				/>
			}
			<canvas
				ref={canvasRef}
				data-hex={wallHex}
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
			{
				Boolean(floorSrc && floorSrcSet && floorSizes) &&
				<Image
					className="ConfigImage-image"
					src={floorSrc}
					srcSet={floorSrcSet}
					layout="fill"
					unoptimized
					loading="eager"
					priority
					sizes={floorSizes}
					alt=""
				/>
			}
			<Image
				className="ConfigImage-imageProduct"
				src={src}
				srcSet={srcSet}
				sizes={sizes}
				layout="fill"
				unoptimized
				loading="eager"
				priority
				alt=""
			/>
		</>
	);
});
