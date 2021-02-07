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
		useTooltip: true,
		options: [
			{
				name: 'almond',
				displayName: 'Almond',
				...standardDisplayOptionGroup,
				hex: 'F5EDE0',
			},
			{
				name: 'black',
				displayName: 'Black',
				...standardDisplayOptionGroup,
				hex: '424143',
			},
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
				detailImage: {
					basePath: '/images/sill/detail',
					fileName: 'Sill-Water-Barrier.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/sill/thumb',
					fileName: 'Sill-Water-Barrier.png',
					width: 150,
				},
			},
			{
				name: 'fs',
				displayName: 'Flush Sill',
				description: 'When ease of entry is more important than performance against the elements. Lines up with most interior flooring.',
				detailImage: {
					basePath: '/images/sill/detail',
					fileName: 'Sill-Flush.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/sill/thumb',
					fileName: 'Sill-Flush.png',
					width: 150,
				},
			},
			{
				name: 'ts',
				displayName: 'Thinline Sill',
				description: 'Ideal for projects where a continuation of flooring from the inside to the outdoors needs to appear virtually seamless.',
				detailImage: {
					basePath: '/images/sill/detail',
					fileName: 'Sill-Thinline.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/sill/thumb',
					fileName: 'Sill-Thinline.png',
					width: 150,
				},
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
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-7600-Flush-Mount-N.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-7600-Flush-Mount-N.png',
					width: 150,
				},
			},
			{
				name: 'fmb',
				displayName: 'Flush-Mounted',
				finish: 'Black',
				description: 'Clean narrow design allows panels to easily slide past each other.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-7600-Flush-Mount-B.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-7600-Flush-Mount-B.png',
					width: 150,
				},
			},
			{
				name: 'pbn',
				displayName: 'Premium',
				finish: 'Brushed Nickel',
				description: 'Minimal one-piece design and a comfortable grip. In brushed nickel or black. Not available on pocketing multi-slide doors.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-7600-Premium-N.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-7600-Premium-N.png',
					width: 150,
				},
			},
			{
				name: 'pb',
				displayName: 'Premium',
				finish: 'Black',
				description: 'Minimal one-piece design and a comfortable grip. In brushed nickel or black. Not available on pocketing multi-slide doors.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-7600-Premium-B.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-7600-Premium-B.png',
					width: 150,
				},
			},
			{
				name: 'cpa',
				displayName: 'C-Pull',
				finish: 'Almond',
				description: 'For a consistent look, this standard handle matches the color of the door frame.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-3700-CPull-Almond.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-3700-CPull-Almond.png',
					width: 150,
				},
			},
			{
				name: 'cpb',
				displayName: 'C-Pull',
				finish: 'Black',
				description: 'For a consistent look, this standard handle matches the color of the door frame.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-3700-CPull-Black.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-3700-CPull-Black.png',
					width: 150,
				},
			},
			{
				name: 'cpw',
				displayName: 'C-Pull',
				finish: 'White',
				description: 'For a consistent look, this standard handle matches the color of the door frame.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-3700-CPull-White.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-3700-CPull-White.png',
					width: 150,
				},
			},
			{
				name: 'cbn',
				displayName: 'Contemporary',
				finish: 'Brushed Nickel',
				description: 'Easy-grip modern design. In brushed nickel or black. Not available on pocketing multi-slide doors.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-7600-Contemporary-N.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-7600-Contemporary-N.png',
					width: 150,
				},
			},
			{
				name: 'cb',
				displayName: 'Contemporary',
				finish: 'Black',
				description: 'Easy-grip modern design. In brushed nickel or black. Not available on pocketing multi-slide doors.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-7600-Contemporary-B.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-7600-Contemporary-B.png',
					width: 150,
				},
			},
			{
				name: 'handles',
				displayName: 'Handles',
				description: 'Each of our bi-fold doors features three high-quality, contemporary handles available in brushed nickel or black.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-7600-Contemporary-B.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-7600-Contemporary-B.png',
					width: 150,
				},
			},
			{
				name: 'db',
				displayName: 'Dallas',
				finish: 'Black',
				description: 'Each of our folding doors features the following: a Dallas handle located on the swinging panel; a D-shaped Pull handle, which aids in opening and closing the door; and an Inactive Lock handle which secures the door panels.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-7950-Dallas-Black.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-7950-Dallas-Black.png',
					width: 150,
				},
			},
			{
				name: 'dbn',
				displayName: 'Dallas',
				finish: 'Brushed Nickel',
				description: 'Each of our folding doors features the following: a Dallas handle located on the swinging panel; a D-shaped Pull handle, which aids in opening and closing the door; and an Inactive Lock handle which secures the door panels.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-7950-Dallas-Brushed-Nickel.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-7950-Dallas-Brushed-Nickel.png',
					width: 150,
				},
			},
			{
				name: 'dsph',
				displayName: 'D-Shaped Pull Handle',
				description: 'Aids in opening and closing the door.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-7600-Contemporary-B.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-7600-Contemporary-B.png',
					width: 150,
				},
			},
			{
				name: 'ilh',
				displayName: 'Inactive Lock Handle',
				description: 'Secures the door panels.',
				detailImage: {
					basePath: '/images/handle/detail',
					fileName: 'Handle-7600-Contemporary-B.png',
					width: 400,
				},
				thumb: {
					basePath: '/images/handle/thumb',
					fileName: 'Handle-7600-Contemporary-B.png',
					width: 150,
				},
			},
		],
	},
	{
		name: 'wall',
		displayName: 'Wall Color',
		useTooltip: true,
		options: [
			{
				name: 'conch',
				displayName: 'Conch',
				hex: 'F5EEE9',
				image: {
					basePath: '/images/environment/wall',
					fileName: 'Wall-Color-Horizon.jpg',
					width: 1230,
				},
			},
			{
				name: 'pistachio',
				displayName: 'Pistachio',
				hex: 'E6EBE4',
				image: {
					basePath: '/images/environment/wall',
					fileName: 'wall-2.png',
					width: 1230,
				},
			},
			{
				name: 'iceberg',
				displayName: 'Iceberg',
				hex: 'E0E7E9',
				image: {
					basePath: '/images/environment/wall',
					fileName: 'wall-2.png',
					width: 1230,
				},
			},
			{
				name: 'pebble',
				displayName: 'Pebble',
				hex: 'CFC4AA',
				image: {
					basePath: '/images/environment/wall',
					fileName: 'wall-2.png',
					width: 1230,
				},
			},
			{
				name: 'meadow',
				displayName: 'Meadow',
				hex: 'BFC5B1',
				image: {
					basePath: '/images/environment/wall',
					fileName: 'wall-2.png',
					width: 1230,
				},
			},
			{
				name: 'horizon',
				displayName: 'Horizon',
				hex: 'B1C3C8',
				image: {
					basePath: '/images/environment/wall',
					fileName: 'wall-2.png',
					width: 1230,
				},
			},
			{
				name: 'smoke',
				displayName: 'Smoke',
				hex: 'B1B9B7',
				image: {
					basePath: '/images/environment/wall',
					fileName: 'wall-2.png',
					width: 1230,
				},
			},
			{
				name: 'jute',
				displayName: 'Jute',
				hex: 'E3D9D1',
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
		useTooltip: true,
		options: [
			{
				name: 'natural',
				displayName: 'Natural',
				image: {
					basePath: '/images/environment/floor',
					fileName: 'Floor-Natural.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/floor/thumb',
					fileName: 'Floor-Natural.jpg',
					width: 150,
				},
			},
			{
				name: 'jacobean',
				displayName: 'Jacobean',
				image: {
					basePath: '/images/environment/floor',
					fileName: 'Floor-Jacobean.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/floor/thumb',
					fileName: 'Floor-Jacobean.jpg',
					width: 150,
				},
			},
			{
				name: 'sw',
				displayName: 'Simply White',
				image: {
					basePath: '/images/environment/floor',
					fileName: 'Floor-Simply-White.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/floor/thumb',
					fileName: 'Floor-Simply-White.jpg',
					width: 150,
				},
			},
			{
				name: 'wo',
				displayName: 'White Oak',
				image: {
					basePath: '/images/environment/floor',
					fileName: 'Floor-White-Oak.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/floor/thumb',
					fileName: 'Floor-White-Oak.jpg',
					width: 150,
				},
			},
			{
				name: 'tile',
				displayName: 'Tile',
				image: {
					basePath: '/images/environment/floor',
					fileName: 'Floor-Tile.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/floor/thumb',
					fileName: 'Floor-Tile.jpg',
					width: 150,
				},
			},
			{
				name: 'marble',
				displayName: 'Marble',
				image: {
					basePath: '/images/environment/floor',
					fileName: 'Floor-Marble.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/floor/thumb',
					fileName: 'Floor-Marble.jpg',
					width: 150,
				},
			},
		],
	},
	{
		name: 'view',
		displayName: 'View',
		useTooltip: true,
		options: [
			{
				name: 'cityscape',
				displayName: 'Cityscape',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Sliding-Cityscape.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Cityscape.png',
					width: 150,
				},
			},
			{
				name: 'desert',
				displayName: 'Desert',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Sliding-Desert.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Desert.png',
					width: 150,
				},
			},
			{
				name: 'mv',
				displayName: 'Mountain View',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Sliding-Mountain-View.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Mountain-View.png',
					width: 150,
				},
			},
			{
				name: 'oceanside',
				displayName: 'Oceanside',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Sliding-Oceanside.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Oceanside.png',
					width: 150,
				},
			},
			{
				name: 'poolside',
				displayName: 'Poolside',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Sliding-Poolside.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Poolside.png',
					width: 150,
				},
			},
			{
				name: 'wt',
				displayName: 'Wild Thing',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Sliding-Wild-Thing.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Wild-Thing.png',
					width: 150,
				},
			},
			{
				name: 'cityscape-wide',
				displayName: 'Cityscape',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Folding-Cityscape.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Cityscape.png',
					width: 150,
				},
			},
			{
				name: 'desert-wide',
				displayName: 'Desert',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Folding-Desert.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Desert.png',
					width: 150,
				},
			},
			{
				name: 'mv-wide',
				displayName: 'Mountain View',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Folding-Mountain-View.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Mountain-View.png',
					width: 150,
				},
			},
			{
				name: 'oceanside-wide',
				displayName: 'Oceanside',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Folding-Oceanside.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Oceanside.png',
					width: 150,
				},
			},
			{
				name: 'poolside-wide',
				displayName: 'Poolside',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Folding-Poolside.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Poolside.png',
					width: 150,
				},
			},
			{
				name: 'wt-wide',
				displayName: 'Wild Thing',
				image: {
					basePath: '/images/environment/background',
					fileName: 'View-Folding-Wild-Thing.png',
					width: 1230,
				},
				thumb: {
					basePath: '/images/environment/background/thumb',
					fileName: 'View-Wild-Thing.png',
					width: 150,
				},
			},
		],
	},
];
