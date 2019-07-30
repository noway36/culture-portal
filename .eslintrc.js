module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'import/newline-after-import': 'off',
        'no-underscore-dangle': 'off',
        'no-plusplus': 'off',
        'prefer-destructuring': 'off',
        'arrow-parens': 'off',
        'operator-linebreak': 'off',
        'arrow-body-style': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-tabindex': 'off',
        'wrap-iife': [2, 'any'],
        'no-use-before-define': ['error', { functions: false, classes: true }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/prefer-stateless-function': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        indent: ['error', 4],
    },
};
