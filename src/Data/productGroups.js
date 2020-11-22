const aspectRatio = 1.24955009;
const basePath = '/images/product-group';
const width = 350;

export default [
	{
		name: 'aluminum-sliding',
		displayName: 'Aluminum',
		displayGroupName: 'Aluminum Sliding Door',
		description: `
			Used in contemporary living spaces, it can be finished in a variety of colors and does not require
			regular maintenance.
		`,
		image: {
			aspectRatio,
			basePath,
			fileName: 'ss-sliding-door.png',
			width,
		},
		animatedImage: {
			aspectRatio,
			basePath,
			fileName: 'ss-sliding-door.gif',
			width,
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
		image: {
			aspectRatio,
			basePath,
			fileName: 'sliding-door.png',
			width,
		},
		animatedImage: {
			aspectRatio,
			basePath,
			fileName: 'sliding-door.gif',
			width,
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
		image: {
			aspectRatio,
			basePath,
			fileName: 'ss-folding-door.png',
			width,
		},
		animatedImage: {
			aspectRatio,
			basePath,
			fileName: 'ss-folding-door.gif',
			width,
		},
		products: ['cabfd', 'pabfd', 'ssabfd'],
	},
];
