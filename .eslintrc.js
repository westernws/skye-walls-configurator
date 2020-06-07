module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: ['airbnb'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	rules: {
		'arrow-body-style': 'off',
		'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
		'class-methods-use-this': 'off',
		'import/prefer-default-export': 'off',
		'indent': [2, 'tab'],
		'jsx-a11y/anchor-is-valid': 'off',
		'max-len': ['off', { code: 120, tabWidth: 4 }],
		'no-console': 'off',
		'no-tabs': 'off',
		'operator-linebreak': 'off',
		'quote-props': [2, 'consistent'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-wrap-multilines': 'off',
		'react/prop-types': 'off',
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['~', './src/'],
					['#', './src/styles/']
				],
				extensions: ['.js', '.jsx'],
			}
		}
	}
};