const colorOptionGroups = [{
	name: 'color',
	options: ['ba', 'sa', 'warmtone', 'white', 'an', 'bb', 'briar', 'ct', 'hb', 'nw', 'sb'],
}];
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
					options: ['fm', 'premium', 'contemporary'],
				}],
			},
			{
				name: 'screen',
			},
			{
				name: 'environment',
				optionGroups: [
					{
						name: 'background',
						options: ['beach', 'countryside'],
					},
					{
						name: 'floor',
						options: ['pergo', 'hardwood'],
					},
					{
						name: 'wall',
						options: ['drywall', 'brick'],
					},
				],
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
					options: ['fm', 'contemporary'],
				}],
			},
			{
				name: 'screen',
			},
			{
				name: 'environment',
				optionGroups: [
					{
						name: 'background',
						options: ['beach', 'countryside'],
					},
					{
						name: 'floor',
						options: ['pergo', 'hardwood'],
					},
					{
						name: 'wall',
						options: ['drywall', 'brick'],
					},
				],
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
					options: ['fm', 'contemporary'],
				}],
			},
			{
				name: 'screen',
			},
			{
				name: 'environment',
				optionGroups: [
					{
						name: 'background',
						options: ['beach', 'countryside'],
					},
					{
						name: 'floor',
						options: ['pergo', 'hardwood'],
					},
					{
						name: 'wall',
						options: ['drywall', 'brick'],
					},
				],
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
				name: 'environment',
				optionGroups: [
					{
						name: 'background',
						options: ['beach', 'countryside'],
					},
					{
						name: 'floor',
						options: ['pergo', 'hardwood'],
					},
					{
						name: 'wall',
						options: ['drywall', 'brick'],
					},
				],
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
					options: ['handles', 'pm', 'dsph', 'ilh'],
				}],
			},
			{
				name: 'environment',
				optionGroups: [
					{
						name: 'background',
						options: ['beach', 'countryside'],
					},
					{
						name: 'floor',
						options: ['pergo', 'hardwood'],
					},
					{
						name: 'wall',
						options: ['drywall', 'brick'],
					},
				],
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
					options: ['handles', 'pm', 'dsph', 'ilh'],
				}],
			},
			{
				name: 'environment',
				optionGroups: [
					{
						name: 'background',
						options: ['beach', 'countryside'],
					},
					{
						name: 'floor',
						options: ['pergo', 'hardwood'],
					},
					{
						name: 'wall',
						options: ['drywall', 'brick'],
					},
				],
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
					options: ['handles', 'pm', 'dsph', 'ilh'],
				}],
			},
			{
				name: 'environment',
				optionGroups: [
					{
						name: 'background',
						options: ['beach', 'countryside'],
					},
					{
						name: 'floor',
						options: ['pergo', 'hardwood'],
					},
					{
						name: 'wall',
						options: ['drywall', 'brick'],
					},
				],
			},
		],
	},
];
