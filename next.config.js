const CircularDependencyPlugin = require('circular-dependency-plugin');
const { deviceSizes } = require('./src/util/breakpoints');

module.exports = {
	images: {
		deviceSizes,
		domains: [
			'buildstaging.skyewallsbywws.com',
			'build.skyewallsbywws.com',
		],
		imageSizes: [16, 32, 48, 64, 96, 128, 144, 256, 384],
	},
	webpack: (config) => {
		config.plugins.push(new CircularDependencyPlugin({
			// exclude detection of files based on a RegExp
			exclude: /node_modules/,
			// add errors to webpack instead of warnings
			failOnError: false,
			allowAsyncCycles: false,
			cwd: process.cwd(),
		}));

		return config;
	},
	purgeCSS: {
		enabled: true,
	},
};
