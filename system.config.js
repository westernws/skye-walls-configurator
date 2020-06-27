/* eslint-disable */
const path = require('path');

// This file is solely for JetBrains IDE's to recognize import aliases correctly.
module.exports = {
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
			'#': path.resolve(__dirname, './src/styles'),
			'-': path.resolve(__dirname, '.'),
		},
	},
};
