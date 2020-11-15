const CircularDependencyPlugin = require('circular-dependency-plugin');
const { deviceSizes } = require('./src/util/breakpoints');

console.log('deviceSizes', deviceSizes);
module.exports = {
	images: {
		deviceSizes,
		domains: [
			'buildstaging.skyewallsbywws.com',
			'build.skyewallsbywws.com',
		],
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
