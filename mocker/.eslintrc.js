/*
 * http://eslint.org/docs/rules/
 * https://github.com/yannickcr/eslint-plugin-react
 */
module.exports = {
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
    },
    'globals': {
        'InitData': true,
        '$': true,
    },
    'rules': {
        'indent': ['error', 4, {'VariableDeclarator':4, 'SwitchCase': 1}],
        'no-unused-vars': ['warn'],
        'no-console': ['warn', {allow: ['warn', 'error']}],
        'eqeqeq': ['warn', 'always'],
        'max-len': ['warn', 120],
    },

}