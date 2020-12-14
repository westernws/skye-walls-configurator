// This needs to be in commonJS because next.config.js uses this.

const isString = (str) => {
	if (str && typeof str.valueOf() === 'string') {
		return true;
	}
	return false;
};

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
		'print': { raw: 'print' },
		'screen': { raw: 'screen' },
	},
	get deviceSizes() {
		return Object.values(this.screens).map((size) => {
			if (!isString(size)) {
				return null;
			}
			const match = size.match(/\d+/);

			return match ? parseInt(match[0], 10) : null;
		}).filter(Boolean);
	},
};
