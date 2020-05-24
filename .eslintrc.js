module.exports = {
	extends: ['airbnb', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'import/prefer-default-export': 'off',
		'prettier/prettier': ['error'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-one-expression-per-line': 'off',
	},
	settings: {
		'import/resolver': {
			// node: {
			// 	paths: [path.resolve(__dirname, './src')],
			// },
			alias: {
				map: [
					['~', './src'],
				],
				extensions: ['.js', '.jsx'],
			}
		}
	}
};
