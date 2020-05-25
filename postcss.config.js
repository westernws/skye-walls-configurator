// const purgecss = require('@fullhuman/postcss-purgecss')({
// 	content: ['./public/**/*.html'],
// 	defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
// })

module.exports = {
	plugins: [
		[
			'postcss-import',
			{
				path: './styles',
			},
		],
		'tailwindcss',
		'postcss-preset-env',
		// [
		// 	'postcss-preset-env',
		// 	{
		// 		autoprefixer: {
		// 			flexbox: 'no-2009',
		// 		},
		// 		stage: 3,
		// 		features: {
		// 			'custom-properties': false,
		// 		},
		// 	},
		// ],
		// 'postcss-nested',
		// 'postcss-flexbugs-fixes',
		// 'autoprefixer',
	],
};
