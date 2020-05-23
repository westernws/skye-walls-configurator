module.exports = {
	extends: ['airbnb', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-one-expression-per-line': 'off',
	},
};
