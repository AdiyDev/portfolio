const prettierConfig = require('./.prettierrc')

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'no-dupe-keys': 'warn',
    'no-empty-pattern': 'warn',
    'react/prop-types': 'off',
    'no-useless-escape': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'no-debugger': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-alert': 'warn',
    'no-use-before-define': 'warn',
    'prettier/prettier': ['warn', prettierConfig],
    camelcase: 'off',
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier'],
}
