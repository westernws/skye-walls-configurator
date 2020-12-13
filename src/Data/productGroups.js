import illustrations from '~/Data/illustrations';

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
		products: ['cabfd', 'pabfd', 'ssabfd'],
	},
];
