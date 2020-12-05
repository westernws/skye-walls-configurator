const path = require('path');
const camelCase = require('lodash/camelCase');
const flatten = require('lodash/flatten');
const optionGroups = require('./src/Data/optionGroups');
const { screens } = require('./src/util/breakpoints');

const colorOptionGroups = optionGroups.filter(optGroup => ['standard-colors', 'designer-colors'].includes(optGroup.name));
// Do I really need this?
const productColors = flatten(colorOptionGroups.map((colorOptionGroup) => {
	return colorOptionGroup.options.map(({ displayName, hex }) => ({
		[camelCase(displayName)]: hex,
	}));
}));

module.exports = {
	purge: [path.join(__dirname, './**/*.jsx')],
	theme: {
		colors: {
			black: '#000',
			blue: {
				default: '#004976',
				100: '#c7e1f2',
				200: '#E5EFF7',
				300: '#C5DFF2',
				400: '#79A4BF',
				500: '#32739D',
			},
			gray: {
				default: '#313131',
				light: '#767676',
				light25: '#c0c0c0',
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
		screens,
	},
	variants: {},
	plugins: [],
};
