const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
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
	// webpackDevMiddleware: (config) => {
	// 	config.watchOptions = config.watchOptions || {};
	// 	config.watchOptions.ignored = [
	// 		// Don't watch _any_ files for changes
	// 		/.p?css/,
	// 	];
	// 	return config;
	// },
};
