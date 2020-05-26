module.exports = {
	// purge: {
	// 	enabled: true,
	// 	content: [
	// 		'./pages/**/*.jsx',
	// 		'./pages/**/*.html',
	// 	],
	// },
	theme: {
		colors: {
			black: '#000',
			blue: {
				default: '#004976',
				lighter: '#c7e1f2',
			},
			gray: {
				default: '#313131',
				lighter: '#f1f1f1',
			},
			red: '#b54633',
			white: '#fff',
			transparent: 'transparent',
		},
		extend: {},
		fontFamily: {
			sans: ['acumin-pro', 'Arial', 'Helvetica', 'sans-serif'],
		},
		screens: {
			// min widths
			xs: '0',
			sm: '500px',
			md: '770px',
			lg: '851px',
			xl: '1024px',
			xxl: '1101px',
			xxxl: '1321px',
			xxxxl: '1500px',
		},
	},
	variants: {},
	plugins: [],
};
