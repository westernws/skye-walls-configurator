// This needs to be in commonJS because next.config.js uses this.

module.exports = {
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
	get deviceSizes() {
		return Object.values(this.screens).map((size) => {
			const match = size.match(/\d+/);

			return match ? parseInt(match[0], 10) : null;
		}).filter(Boolean);
	},
};
