// This must be in CommonJS syntax since Tailwind needs to read from it.
module.exports = [
	{
		name: 'color',
		displayName: 'Color',
		options: [
			{
				name: 'ba',
				displayName: 'Bronze Anodized',
				hex: '000',
			},
			{
				name: 'sa',
				displayName: 'Satin Anodized',
				hex: 'c7c8ca',
			},
			{
				name: 'white',
				displayName: 'White',
				hex: 'fff',
			},
			{
				name: 'warmtone',
				displayName: 'Warmtone',
				hex: 'a79e8f',
			},
			{
				name: 'black',
				displayName: 'Black',
				hex: '000',
			},
			{
				name: 'almond',
				displayName: 'Almond',
				hex: 'f5ede0',
			},
		],
	},
	{
		name: 'floor-tracks',
		displayName: 'Floor Tracks',
		options: [
			{
				name: 'wbs',
				displayName: 'Water Barrier Sill',
				description: 'Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.',
			},
			{
				name: 'fs',
				displayName: 'Flush Sill',
				description: 'When ease of entry is more important than performance against the elements. Lines up with most interior flooring.',
			},
			{
				name: 'ts',
				displayName: 'Thinline Sill',
				description: 'Ideal for projects where a continuation of flooring from the inside to the outdoors needs to appear virtually seamless.',
			},
		],
	},
	{
		name: 'handles',
		displayName: 'Handles',
		options: [
			{
				name: 'fm',
				displayName: 'Flush-Mounted',
				description: 'Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.',
			},
			{
				name: 'premium',
				displayName: 'Premium',
				description: 'Minimal one-piece design and a comfortable grip. In brushed nickel or black. Not available on pocketing multi-slide doors.',
			},
			{
				name: 'contemporary',
				displayName: 'Contemporary',
				description: 'Easy-grip modern design. In brushed nickel or black. Not available on pocketing multi-slide doors.',
			},
			{
				name: 'handles',
				displayName: 'Handles',
				description: 'Each of our bi-fold doors features three high-quality, contemporary handles available in brushed nickel or black.',
			},
			{
				name: 'dh',
				displayName: 'Dallas Handle',
				description: 'Located on the swinging panel, making it convenient for everyday use.',
			},
			{
				name: 'dsph',
				displayName: 'D-Shaped Pull Handle',
				description: 'Aids in opening and closing the door.',
			},
			{
				name: 'ilh',
				displayName: 'Inactive Lock Handle',
				description: 'Secures the door panels.',
			},
		],
	},
	{
		name: 'wall',
		displayName: 'Wall',
		options: [
			{
				name: 'drywall',
				displayName: 'Drywall',
				image: {
					basePath: '/images/environment/wall',
					fileName: 'wall-1.png',
					width: 1230,
				},
			},
			{
				name: 'brick',
				displayName: 'Brick',
				image: {
					basePath: '/images/environment/wall',
					fileName: 'wall-2.png',
					width: 1230,
				},
			},
		],
	},
	{
		name: 'floor',
		displayName: 'Floor',
		options: [
			{
				name: 'pergo',
				displayName: 'Pergo',
				image: {
					basePath: '/images/environment/floor',
					fileName: 'floor-1.png',
					width: 1230,
				},
			},
			{
				name: 'hardwood',
				displayName: 'Hardwood',
				image: {
					basePath: '/images/environment/floor',
					fileName: 'floor-2.png',
					width: 1230,
				},
			},
		],
	},
	{
		name: 'background',
		displayName: 'Background',
		options: [
			{
				name: 'countryside',
				displayName: 'Countryside',
				image: {
					basePath: '/images/environment/background',
					fileName: 'background-1.png',
					width: 1230,
				},
			},
			{
				name: 'beach',
				displayName: 'Beach',
				image: {
					basePath: '/images/environment/background',
					fileName: 'background-2.png',
					width: 1230,
				},
			},
		],
	},
];
