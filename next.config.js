const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
	webpack: (config) => {
		config.plugins.push(new CircularDependencyPlugin({
			// exclude detection of files based on a RegExp
			exclude: /node_modules/,
			// add errors to webpack instead of warnings
			failOnError: true,
			allowAsyncCycles: false,
			cwd: process.cwd(),
		}));

		return config;
	},
	purgeCSS: {
		enabled: true,
	},
};
