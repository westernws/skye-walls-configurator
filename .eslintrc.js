module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: ['airbnb'],
	// plugins: ['prettier'],
	rules: {
		'arrow-body-style': 'off',
		'import/prefer-default-export': 'off',
		'indent': [2, 'tab'],
		'jsx-a11y/anchor-is-valid': 'off',
		'max-len': [2, { code: 120, tabWidth: 4 }],
		'no-console': 'off',
		'no-tabs': 'off',
		'quote-props': [2, 'consistent'],
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
					['#', './styles/']
				],
				extensions: ['.js', '.jsx'],
			}
		}
	}
};
