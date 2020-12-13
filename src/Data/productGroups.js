import illustrations from '~/Data/illustrations';

const reviewImageWidth = 188;

export default [
	{
		name: 'aluminum-sliding',
		displayName: 'Aluminum',
		displayGroupName: 'Aluminum Sliding Door',
		description: `
			Used in contemporary living spaces, it can be finished in a variety of colors and does not require
			regular maintenance.
		`,
		image: illustrations.static.sliding,
		animatedImage: illustrations.animated.sliding,
		reviewImage: {
			...illustrations.static.sliding,
			width: reviewImageWidth,
		},
		products: ['camsd', 'pamsd', 'ssamsd'],
	},
	{
		name: 'vinyl-sliding',
		displayName: 'Vinyl',
		displayGroupName: 'Vinyl Sliding Door',
		description: `
			The most economical solution to transform your home, it stands up to the elements and is
			nearly maintenance-free.
		`,
		image: illustrations.static.slidingSimulatedSteel,
		animatedImage: illustrations.animated.slidingSimulatedSteel,
		reviewImage: {
			...illustrations.static.slidingSimulatedSteel,
			width: reviewImageWidth,
		},
		products: ['vmsd'],
	},
	{
		name: 'aluminum-folding',
		displayName: 'Aluminum',
		displayGroupName: 'Aluminum Folding Door',
		description: `
			Combining clean modern design with durability and flexibility, it’s available in a variety of finishes.
		`,
		image: illustrations.static.folding,
		animatedImage: illustrations.animated.folding,
		reviewImage: {
			...illustrations.static.folding,
			width: reviewImageWidth,
		},
		products: ['cabfd', 'pabfd', 'ssabfd'],
	},
];
