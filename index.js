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
  plugins: ['jquery'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:jquery/deprecated',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': [0],
    'import/prefer-default-export': [0], // essa regra é irritante
    'jsx-a11y/media-has-caption': [0],
    'jsx-a11y/label-has-associated-control': 'off',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['draft', 'acc'] },
    ],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'function-declaration' },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
}
