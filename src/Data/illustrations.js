const aspectRatio = 1.24955009;
const basePath = '/images/product-illustrations';
const width = 350;
const foldingAltText = 'Folding door product illustrations';
const slidingAltText = 'Sliding door product illustrations';

export default {
	static: {
		folding: {
			alt: foldingAltText,
			aspectRatio,
			basePath,
			fileName: 'folding-door.png',
			width,
		},
		sliding: {
			alt: slidingAltText,
			aspectRatio,
			basePath,
			fileName: 'sliding-door.png',
			width,
		},
		slidingSimulatedSteel: {
			alt: slidingAltText,
			aspectRatio,
			basePath,
			fileName: 'ss-sliding-door.png',
			width,
		},
		foldingSimulatedSteel: {
			alt: foldingAltText,
			aspectRatio,
			basePath,
			fileName: 'ss-folding-door.png',
			width,
		},
	},
	animated: {
		folding: {
			alt: foldingAltText,
			aspectRatio,
			basePath,
			fileName: 'folding-door.gif',
			width,
		},
		sliding: {
			alt: slidingAltText,
			aspectRatio,
			basePath,
			fileName: 'sliding-door.gif',
			width,
		},
		slidingSimulatedSteel: {
			alt: slidingAltText,
			aspectRatio,
			basePath,
			fileName: 'ss-sliding-door.gif',
			width,
		},
		foldingSimulatedSteel: {
			alt: foldingAltText,
			aspectRatio,
			basePath,
			fileName: 'ss-folding-door.gif',
			width,
		},
	},
};
