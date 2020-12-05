const standardDisplayOptionGroup = {
	displayOptionGroupName: 'standard',
	displayOptionGroupDisplayName: 'Standard',
};
const designerDisplayOptionGroup = {
	displayOptionGroupName: 'designer',
	displayOptionGroupDisplayName: 'Designer',
};

// This must be in CommonJS syntax since Tailwind needs to read from it.
module.exports = [
	{
		name: 'color',
		displayName: 'Color',
		options: [
			{
				name: 'ba',
				displayName: 'Bronze Anodized',
				...standardDisplayOptionGroup,
				hex: '424143',
			},
			{
				name: 'sa',
				displayName: 'Satin Anodized',
				...standardDisplayOptionGroup,
				hex: 'D0D0CF',
			},
			{
				name: 'warmtone',
				displayName: 'Warmtone',
				...standardDisplayOptionGroup,
				hex: '978C7B',
			},
			{
				name: 'white',
				displayName: 'White',
				...standardDisplayOptionGroup,
				hex: 'fff',
			},
			{
				name: 'an',
				displayName: 'Autumn Night',
				...designerDisplayOptionGroup,
				hex: '9C674F',
			},
			{
				name: 'bb',
				displayName: 'Bison Beige',
				...designerDisplayOptionGroup,
				hex: '8D806F',
			},
			{
				name: 'briar',
				displayName: 'Briar',
				...designerDisplayOptionGroup,
				hex: '6B4C38',
			},
			{
				name: 'ct',
				displayName: 'Cinnamon Toast',
				...designerDisplayOptionGroup,
				hex: '7B2022',
			},
			{
				name: 'hb',
				displayName: 'Hillside Bronze',
				...designerDisplayOptionGroup,
				hex: '3C2B13',
			},
			{
				name: 'nw',
				displayName: 'Navajo White',
				...designerDisplayOptionGroup,
				hex: 'F5EDE0',
			},
			{
				name: 'sb',
				displayName: 'Stonish Beige',
				...designerDisplayOptionGroup,
				hex: 'B5A48B',
			},
		],
	},
	{
		name: 'floor-sills',
		displayName: 'Floor Sills',
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
				name: 'fmbn',
				displayName: 'Flush-Mounted',
				finish: 'Brushed Nickel',
				description: 'Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.',
			},
			{
				name: 'fmb',
				displayName: 'Flush-Mounted',
				finish: 'Black',
				description: 'Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.',
			},
			{
				name: 'pbn',
				displayName: 'Premium',
				finish: 'Brushed Nickel',
				description: 'Minimal one-piece design and a comfortable grip. In brushed nickel or black. Not available on pocketing multi-slide doors.',
			},
			{
				name: 'pb',
				displayName: 'Premium',
				finish: 'Black',
				description: 'Minimal one-piece design and a comfortable grip. In brushed nickel or black. Not available on pocketing multi-slide doors.',
			},
			{
				name: 'cpa',
				displayName: 'C-Pull',
				finish: 'Almond',
				description: 'For a consistent look, this standard handle matches the color of the door frame.',
			},
			{
				name: 'cpb',
				displayName: 'C-Pull',
				finish: 'Black',
				description: 'For a consistent look, this standard handle matches the color of the door frame.',
			},
			{
				name: 'cpw',
				displayName: 'C-Pull',
				finish: 'White',
				description: 'For a consistent look, this standard handle matches the color of the door frame.',
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
