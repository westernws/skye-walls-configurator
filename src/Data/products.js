export default [
	{
		name: 'camsd',
		displayName: 'Classic Aluminum Multi-Slide Door',
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
		optionGroups: [
			{
				name: 'color',
				options: ['ba', 'sa', 'white', 'warmtone'],
			},
			{
				name: 'floor-tracks',
				options: ['wbs', 'fs', 'ts'],
			},
			{
				name: 'handles',
				options: ['fm', 'premium', 'contemporary'],
			},
			{
				name: 'screen',
				options: ['screen'],
			},
		],
	},
	{
		name: 'pamsd',
		displayName: 'Performance Aluminum Multi-Slide Door',
		description: 'Energy effeciency and strength,',
		features: [
			'Available in bigger and taller sizes',
			'Design pressure (DP) rating of 50 for durability',
			'Compliant with California’s rigorous Title 24 requirements',
		],
		optionGroups: [
			{
				name: 'color',
				options: ['ba', 'sa', 'white', 'warmtone'],
			},
			{
				name: 'floor-tracks',
				options: ['wbs', 'fs', 'ts'],
			},
			{
				name: 'handles',
				options: ['fm', 'contemporary'],
			},
			{
				name: 'screen',
				options: ['screen'],
			},
		],
	},
	{
		name: 'ssamsd',
		displayName: 'Simulated Steel Aluminum Multi-Slide Door',
		description: 'The look of steel but more affordable.',
		features: [
			'Available in bigger and taller sizes',
			'Design pressure (DP) rating of 50 for durability',
			'Compliant with California’s rigorous Title 24 requirements',
		],
		optionGroups: [
			{
				name: 'color',
				options: ['ba', 'sa', 'white', 'warmtone'],
			},
			{
				name: 'floor-tracks',
				options: ['wbs', 'fs', 'ts'],
			},
			{
				name: 'handles',
				options: ['fm', 'contemporary'],
			},
			{
				name: 'screen',
				options: ['screen'],
			},
		],
	},
	{
		name: 'vmsd',
		displayName: 'Vinyl Multi-Slide Door',
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
		optionGroups: [
			{
				name: 'color',
				options: ['black', 'white', 'almond'],
			},
		],
	},
	{
		name: 'cabfd',
		displayName: 'Classic Aluminum Bi-Fold Door',
		description: 'Smooth operation meets clean design.',
		features: [
			'Low-E dual pane argon-filled glass for energy efficiency',
			'Narrow stile for additional glass and light',
			'Stainless steel ball bearing rollers for smooth operation',
			'Concealed multi-point lock for additional protection',
			'Contemporary hardware for a sleek aesthetic',
			'Optional single swinging access door for everyday use',
		],
		screeningNotAvailable: true,
		optionGroups: [
			{
				name: 'color',
				options: ['ba', 'sa', 'white', 'warmtone'],
			},
			{
				name: 'floor-tracks',
				options: ['wbs', 'fs'],
			},
			{
				name: 'handles',
				options: ['handles', 'pm', 'dsph', 'ilh'],
			},
		],
	},
	{
		name: 'pabfd',
		displayName: 'Performance Aluminum Bi-Fold Door',
		description: 'Energy efficiency and strength',
		features: [
			'Available in bigger and taller sizes',
			'Design pressure (DP) rating of 50 for durability',
			'Compliant with California’s rigorous Title 24 requirements',
		],
		afterMarketScreening: true,
		optionGroups: [
			{
				name: 'color',
				options: ['ba', 'sa', 'white', 'warmtone'],
			},
			{
				name: 'floor-tracks',
				options: ['wbs', 'fs'],
			},
			{
				name: 'handles',
				options: ['handles', 'pm', 'dsph', 'ilh'],
			},
		],
	},
	{
		name: 'ssabfd',
		displayName: 'Simulated Steel Aluminum Bi-Fold Door',
		description: 'The look of steel but more affordable.',
		features: [
			'Beveled glass stops',
			'Simulated divided lights to emulate a putty glaze',
		],
		optionGroups: [
			{
				name: 'color',
				options: ['ba', 'sa', 'white', 'warmtone'],
			},
			{
				name: 'floor-tracks',
				options: ['wbs', 'fs'],
			},
			{
				name: 'handles',
				options: ['handles', 'pm', 'dsph', 'ilh'],
			},
		],
	},
];
