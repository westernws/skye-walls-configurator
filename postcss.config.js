module.exports = {
	plugins: [
		[
			'postcss-import',
			{
				path: './styles',
			},
		],
		'tailwindcss',
		[
			'postcss-preset-env',
			{
				autoprefixer: {
					flexbox: 'no-2009',
				},
				stage: 3,
				features: {
					'custom-properties': false,
				},
			},
		],
		'postcss-nested',
		'postcss-flexbugs-fixes',
	],
};
