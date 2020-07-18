import React from 'react';

export const DummyImage = ({
	className, width, height, text = 'FPO', color = '373737', fontSize = '48',
}) => {
	return (
		<img
			className={className}
			src={`https://dummyimage.com/${width}x${height}/999/eee.png&text=${text} ${width}x${height}`}
			alt=""
		/>
	);
	// return (
	// 	<img
	// 		className={className}
	// 		src={`//www.gifpng.com/${width}x${height || width}/${color}/ffffff?border-width=2&border-type=rectangle&border-color=ff00ff&font-size=${fontSize}&text=${text}`}
	// 		alt=""
	// 	/>
	// );
};
