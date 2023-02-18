module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  plugins: ['es'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off', // essa regra é irritante
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['draft', 'acc'] },
    ],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'function-declaration' },
    ],
    'es/no-regexp-lookbehind-assertions': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
