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
	plugins: ['babel'],
	rules: {
		'arrow-body-style': 'off',
		'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
		'babel/no-unused-expressions': 1,
		'class-methods-use-this': 'off',
		'import/prefer-default-export': 'off',
		'indent': [2, 'tab', {
			'ignoredNodes': ['TemplateLiteral'],
			'SwitchCase': 1,
		}],
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/click-events-have-key-events': 1,
		'jsx-a11y/label-has-associated-control': 'off',
		'max-len': ['off', { code: 120, tabWidth: 4 }],
		'no-console': 'off',
		'no-param-reassign': [2, { props: false }],
		'no-tabs': 'off',
		'no-unused-expressions': 'off',
		'operator-linebreak': 'off',
		'quote-props': [2, 'consistent'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-wrap-multilines': 'off',
		'react/prop-types': 'off',
		'template-curly-spacing': 'off',
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['-', './'],
					['~', './src/'],
					['#', './src/styles/'],
				],
				extensions: ['.js', '.jsx'],
			},
		},
	},
};
