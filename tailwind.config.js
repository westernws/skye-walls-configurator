const path = require('path');
const camelCase = require('lodash/camelCase');
const optionGroups = require('./src/Data/optionGroups');

const colorOptionGroup = optionGroups.find(optGroup => optGroup.name === 'color');
// Do I really need this?
const productColors = colorOptionGroup.options.map(({ displayName, hex }) => ({
	[camelCase(displayName)]: hex,
}));

module.exports = {
	purge: [path.join(__dirname, './**/*.jsx')],
	theme: {
		colors: {
			black: '#000',
			blue: {
				default: '#004976',
				lighter: '#c7e1f2',
			},
			gray: {
				default: '#313131',
				light: '#767676',
				light50: '#d1d1d1',
				light100: '#eaeaea',
				lighter: '#f1f1f1',
			},
			red: '#b54633',
			white: '#fff',
			transparent: 'transparent',
			outline: '#e59700',
			products: {
				...productColors,
			},
		},
		extend: {
			zIndex: {
				'-10': '-10',
			},
		},
		fontFamily: {
			sans: ['acumin-pro', 'Arial', 'Helvetica', 'sans-serif'],
		},
		screens: {
			// min widths
			'xs': '0',
			'sm': '500px',
			// 'md': '770px',
			'md': '768px',
			'lg': '851px',
			// Desktop menu
			'xl': '1024px',
			'2xl': '1101px',
			'3xl': '1321px',
			'4xl': '1500px',
		},
	},
	variants: {},
	plugins: [],
};
