module.exports = {
	extends: ['airbnb', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'import/prefer-default-export': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'prettier/prettier': ['error'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['~', './'],
				],
				extensions: ['.js', '.jsx'],
			}
		}
	}
};
