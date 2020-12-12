const colorOptionGroups = [{
	name: 'color',
	options: ['ba', 'sa', 'warmtone', 'white', 'an', 'bb', 'briar', 'ct', 'hb', 'nw', 'sb'],
}];
const environmentOptionGroups = [
	{
		name: 'view',
		options: ['cityscape', 'desert', 'mv', 'oceanside', 'poolside', 'wt'],
	},
	{
		name: 'wall',
		options: ['conch', 'pistachio', 'iceberg', 'pebble', 'meadow', 'horizon', 'smoke', 'jute'],
	},
	{
		name: 'floor',
		options: ['natural', 'jacobean', 'sw', 'wo', 'tile', 'marble'],
	},
];
const images = [
	{
		color: 'ba',
		fileName: '7600-2xo-bronze-ano.png',
		width: 1230,
	},
	{
		color: 'sa',
		fileName: '7600-2xo-satin-ano.png',
		width: 1230,
	},
	{
		color: 'warmtone',
		fileName: '7600-2xo-warmtone.png',
		width: 1230,
	},
	{
		color: 'white',
		fileName: '7600-2xo-white.png',
		width: 1230,
	},
	{
		color: 'an',
		fileName: '7600-2xo-white.png',
		width: 1230,
	},
	{
		color: 'bb',
		fileName: '7600-2xo-white.png',
		width: 1230,
	},
	{
		color: 'briar',
		fileName: '7600-2xo-white.png',
		width: 1230,
	},
	{
		color: 'ct',
		fileName: '7600-2xo-white.png',
		width: 1230,
	},
	{
		color: 'hb',
		fileName: '7600-2xo-white.png',
		width: 1230,
	},
	{
		color: 'nw',
		fileName: '7600-2xo-white.png',
		width: 1230,
	},
	{
		color: 'sb',
		fileName: '7600-2xo-white.png',
		width: 1230,
	},
];

export default [
	{
		name: 'camsd',
		displayName: 'Classic Aluminum Sliding Door',
		description: 'Smooth operation meets clean design.',
		features: [
			'Low-E dual pane argon-filled glass for energy efficiency',
			'Wide panels for more light and glass',
			'Panels can move in one direction or part in the center',
			'Panels can stack within the frame or conceal within a wall pocket',
			'Stainless steel ball bearing rollers for easy operation',
			'Concealed multi-point locking system',
			'Contemporary hardware',
			'After-market screening solution',
		],
		images: [
			{
				color: 'ba',
				fileName: '7600-2xo-bronze-ano.png',
				width: 1230,
			},
			{
				color: 'sa',
				fileName: '7600-2xo-satin-ano.png',
				width: 1230,
			},
			{
				color: 'warmtone',
				fileName: '7600-2xo-warmtone.png',
				width: 1230,
			},
			{
				color: 'white',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
			{
				color: 'an',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
			{
				color: 'bb',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
			{
				color: 'briar',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
			{
				color: 'ct',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
			{
				color: 'hb',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
			{
				color: 'nw',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
			{
				color: 'sb',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
		],
		selectionGroups: [
			{
				name: 'color',
				optionGroups: colorOptionGroups,
			},
			{
				name: 'floor-sills',
				optionGroups: [{
					name: 'floor-sills',
					options: ['wbs', 'fs', 'ts'],
				}],
			},
			{
				name: 'handles',
				optionGroups: [{
					name: 'handles',
					options: ['fmbn', 'fmb', 'pbn', 'pb'],
				}],
			},
			{
				name: 'environment',
				optionGroups: environmentOptionGroups,
			},
		],
	},
	{
		name: 'pamsd',
		displayName: 'Performance Aluminum Sliding Door',
		description: 'Energy effeciency and strength.',
		inheritedFeatures: 'Everything in Classic, PLUS',
		inheritedFeaturesLong: 'Including everything from our CLASSIC models and more.',
		features: [
			'Available in bigger and taller sizes',
			'Design pressure (DP) rating of 50 for durability',
			'Compliant with California’s rigorous Title 24 requirements',
		],
		baseImagePath: '/images/product/sliding/aluminum/performance',
		// TODO (aboyer) May want to add "short-name" field for image directory mapping.
		images: [
			{
				color: 'sa',
				fileName: '7600-2xo-satin-ano.png',
				width: 1230,
			},
			{
				color: 'warmtone',
				fileName: '7600-2xo-warmtone.png',
				width: 1230,
			},
			{
				color: 'white',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
			{
				color: 'an',
				handle: null,
				fileName: '7600-aluminum-autumn-night-no-handle-classic-performance.png',
				width: 1230,
			},
			{
				color: 'an',
				handle: 'cb',
				fileName: '7600-aluminum-autumn-night-contemporary-black-non-pocketing-performance.png',
				width: 1230,
			},
			{
				color: 'an',
				handle: 'cbn',
				fileName: '7600-aluminum-autumn-night-contemporary-brushed-nickel-non-pocketing-performance.png',
				width: 1230,
			},
			{
				color: 'an',
				handle: 'fmb',
				fileName: '7600-aluminum-autumn-night-flush-mounted-black-classic-performance.png',
				width: 1230,
			},
			{
				color: 'an',
				handle: 'fmbn',
				fileName: '7600-aluminum-autumn-night-flush-mounted-brushed-nickel-classic-performance.png',
				width: 1230,
			},
			{
				color: 'an',
				handle: 'pb',
				fileName: '7600-aluminum-autumn-night-premium-black-non-pocketing-classic.png',
				width: 1230,
			},
			{
				color: 'an',
				handle: 'pbn',
				fileName: '7600-aluminum-autumn-night-premium-brushed-nickel-non-pocketing-classic.png',
				width: 1230,
			},
			{
				color: 'bb',
				handle: null,
				fileName: '7600-aluminum-bison-beige-no-handle-classic-performance.png',
				width: 1230,
			},
			{
				color: 'bb',
				handle: 'cb',
				fileName: '7600-aluminum-bison-beige-contemporary-black-non-pocketing-performance.png',
				width: 1230,
			},
			{
				color: 'bb',
				handle: 'cbn',
				fileName: '7600-aluminum-bison-beige-contemporary-brushed-nickel-non-pocketing-performance.png',
				width: 1230,
			},
			{
				color: 'bb',
				handle: 'fmb',
				fileName: '7600-aluminum-bison-beige-flush-mounted-black-classic-performance.png',
				width: 1230,
			},
			{
				color: 'bb',
				handle: 'fmbn',
				fileName: '7600-aluminum-bison-beige-flush-mounted-brushed-nickel-classic-performance.png',
				width: 1230,
			},
			{
				color: 'bb',
				handle: 'pb',
				fileName: '7600-aluminum-bison-beige-premium-black-non-pocketing-classic.png',
				width: 1230,
			},
			{
				color: 'bb',
				handle: 'pbn',
				fileName: '7600-aluminum-bison-beige-premium-brushed-nickel-non-pocketing-classic.png',
				width: 1230,
			},
			{
				color: 'briar',
				handle: null,
				fileName: '7600-aluminum-briar-no-handle-classic-performance.png',
				width: 1230,
			},
			{
				color: 'briar',
				handle: 'cb',
				fileName: '7600-aluminum-briar-contemporary-black-non-pocketing-performance.png',
				width: 1230,
			},
			{
				color: 'briar',
				handle: 'cbn',
				fileName: '7600-aluminum-briar-contemporary-brushed-nickel-non-pocketing-performance.png',
				width: 1230,
			},
			{
				color: 'briar',
				handle: 'fmb',
				fileName: '7600-aluminum-briar-flush-mounted-black-classic-performance.png',
				width: 1230,
			},
			{
				color: 'briar',
				handle: 'fmbn',
				fileName: '7600-aluminum-briar-flush-mounted-brushed-nickel-classic-performance.png',
				width: 1230,
			},
			{
				color: 'briar',
				handle: 'pb',
				fileName: '7600-aluminum-briar-premium-black-non-pocketing-classic.png',
				width: 1230,
			},
			{
				color: 'briar',
				handle: 'pbn',
				fileName: '7600-aluminum-briar-premium-brushed-nickel-non-pocketing-classic.png',
				width: 1230,
			},
			{
				color: 'ba',
				handle: null,
				fileName: '7600-aluminum-bronze-anodized-no-handle-classic-performance.png',
				width: 1230,
			},
			{
				color: 'ba',
				handle: 'cb',
				fileName: '7600-aluminum-bronze-anodized-contemporary-black-non-pocketing-performance.png',
				width: 1230,
			},
			{
				color: 'ba',
				handle: 'cbn',
				fileName: '7600-aluminum-bronze-anodized-contemporary-brushed-nickel-non-pocketing-performance.png',
				width: 1230,
			},
			{
				color: 'ba',
				handle: 'fmb',
				fileName: '7600-aluminum-bronze-anodized-flush-mounted-black-classic-performance.png',
				width: 1230,
			},
			{
				color: 'ba',
				handle: 'fmbn',
				fileName: '7600-aluminum-bronze-anodized-flush-mounted-brushed-nickel-classic-performance.png',
				width: 1230,
			},
			{
				color: 'ba',
				handle: 'pb',
				fileName: '7600-aluminum-bronze-anodized-premium-black-non-pocketing-classic.png',
				width: 1230,
			},
			{
				color: 'ba',
				handle: 'pbn',
				fileName: '7600-aluminum-bronze-anodized-premium-brushed-nickel-non-pocketing-classic.png',
				width: 1230,
			},
			{
				color: 'ct',
				handle: null,
				fileName: '7600-aluminum-cinnamon-toast-no-handle-classic-performance.png',
				width: 1230,
			},
			{
				color: 'ct',
				handle: 'cb',
				fileName: '7600-aluminum-cinnamon-toast-contemporary-black-non-pocketing-performance.png',
				width: 1230,
			},
			{
				color: 'ct',
				handle: 'cbn',
				fileName: '7600-aluminum-cinnamon-toast-contemporary-brushed-nickel-non-pocketing-performance.png',
				width: 1230,
			},
			{
				color: 'ct',
				handle: 'fmb',
				fileName: '7600-aluminum-cinnamon-toast-flush-mounted-black-classic-performance.png',
				width: 1230,
			},
			{
				color: 'ct',
				handle: 'fmbn',
				fileName: '7600-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-classic-performance.png',
				width: 1230,
			},
			{
				color: 'ct',
				handle: 'pb',
				fileName: '7600-aluminum-cinnamon-toast-premium-black-non-pocketing-classic.png',
				width: 1230,
			},
			{
				color: 'ct',
				handle: 'pbn',
				fileName: '7600-aluminum-cinnamon-toast-premium-brushed-nickel-non-pocketing-classic.png',
				width: 1230,
			},
			{
				color: 'hb',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
			{
				color: 'nw',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
			{
				color: 'sb',
				fileName: '7600-2xo-white.png',
				width: 1230,
			},
		],
		selectionGroups: [
			{
				name: 'color',
				optionGroups: colorOptionGroups,
			},
			{
				name: 'floor-sills',
				optionGroups: [{
					name: 'floor-sills',
					options: ['wbs', 'fs', 'ts'],
				}],
			},
			{
				name: 'handles',
				optionGroups: [{
					name: 'handles',
					options: ['fmbn', 'fmb', 'cbn', 'cb'],
				}],
			},
			{
				name: 'environment',
				optionGroups: environmentOptionGroups,
			},
		],
	},
	{
		name: 'ssamsd',
		displayName: 'Simulated Steel Aluminum Sliding Door',
		description: 'The look of steel but more affordable.',
		inheritedFeatures: 'Everything in Classic and Peformance, PLUS',
		inheritedFeaturesLong: 'Including everything from our PERFORMANCE and CLASSIC models and more.',
		features: [
			'Beveled glass stops',
			'Simulated divided lights to emulate a putty glaze',
		],
		images,
		selectionGroups: [
			{
				name: 'color',
				optionGroups: colorOptionGroups,
			},
			{
				name: 'floor-sills',
				optionGroups: [{
					name: 'floor-sills',
					options: ['wbs', 'fs', 'ts'],
				}],
			},
			{
				name: 'handles',
				optionGroups: [{
					name: 'handles',
					options: ['fmbn', 'fmb', 'cbn', 'cb'],
				}],
			},
			{
				name: 'environment',
				optionGroups: environmentOptionGroups,
			},
		],
	},
	{
		name: 'vmsd',
		displayName: 'Vinyl Sliding Door',
		description: `
			The most economical solution to transform your home, it stands up to the elements and is
			nearly maintenance-free.
		`,
		features: [
			'Low-E dual pane argon-filled glass for energy efficiency',
			'Wide panels allow for more light and bigger views',
			'A built-in self-drainage weep system to help safeguard against water intrusion',
			'Color-matched hardware',
			'Concealed locking system',
			'Flush-mounted handle so panels easily slide past each other',
			'After-market screening solution',
		],
		images,
		selectionGroups: [
			{
				name: 'color',
				optionGroups: colorOptionGroups,
			},
			{
				name: 'handles',
				optionGroups: [{
					name: 'handles',
					options: ['cpa', 'cpb', 'cpw', 'fmb'],
				}],
			},
			{
				name: 'environment',
				optionGroups: environmentOptionGroups,
			},
		],
	},
	{
		name: 'cabfd',
		displayName: 'Classic Aluminum Folding Door',
		description: 'Smooth operation meets clean design.',
		features: [
			'Low-E dual pane argon-filled glass for energy efficiency',
			'Narrow shardwood for additional glass and light',
			'Stainless steel ball bearing rollers for smooth operation',
			'Concealed multi-point lock for additional protection',
			'Contemporary hardware for a sleek aesthetic',
			'Optional single swinging access door for everyday use',
		],
		images,
		selectionGroups: [
			{
				name: 'color',
				optionGroups: colorOptionGroups,
			},
			{
				name: 'floor-sills',
				optionGroups: [{
					name: 'floor-sills',
					options: ['wbs', 'fs'],
				}],
			},
			{
				name: 'handles',
				optionGroups: [{
					name: 'handles',
					options: ['fmbn', 'fmb'],
				}],
			},
			{
				name: 'environment',
				optionGroups: environmentOptionGroups,
			},
		],
	},
	{
		name: 'pabfd',
		displayName: 'Performance Aluminum Folding Door',
		description: 'Energy efficiency and strength',
		inheritedFeatures: 'Everything in Classic',
		inheritedFeaturesLong: 'Including everything from our CLASSIC models and more.',
		features: [
			'Available in bigger and taller sizes',
			'Design pressure (DP) rating of 50 for durability',
			'Compliant with California’s rigorous Title 24 requirements',
		],
		images,
		selectionGroups: [
			{
				name: 'color',
				optionGroups: colorOptionGroups,
			},
			{
				name: 'floor-sills',
				optionGroups: [{
					name: 'floor-sills',
					options: ['wbs', 'fs'],
				}],
			},
			{
				name: 'handles',
				optionGroups: [{
					name: 'handles',
					options: ['fmbn', 'fmb'],
				}],
			},
			{
				name: 'environment',
				optionGroups: environmentOptionGroups,
			},
		],
	},
	{
		name: 'ssabfd',
		displayName: 'Simulated Steel Aluminum Folding Door',
		description: 'The look of steel but more affordable.',
		inheritedFeatures: 'Everything in Performance',
		inheritedFeaturesLong: 'Including everything from our PERFORMANCE models and more.',
		features: [
			'Beveled glass stops',
			'Simulated divided lights to emulate a putty glaze',
		],
		images,
		selectionGroups: [
			{
				name: 'color',
				optionGroups: colorOptionGroups,
			},
			{
				name: 'floor-sills',
				optionGroups: [{
					name: 'floor-sills',
					options: ['wbs', 'fs'],
				}],
			},
			{
				name: 'handles',
				optionGroups: [{
					name: 'handles',
					options: ['fmbn', 'fmb'],
				}],
			},
			{
				name: 'environment',
				optionGroups: environmentOptionGroups,
			},
		],
	},
];
