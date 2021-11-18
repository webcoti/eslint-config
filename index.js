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
  plugins: ['jquery', 'es'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:jquery/deprecated',
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
  overrides: [
    {
      files: '*.+(tsx|ts)',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        // permite importar types, que geralmente são instalados como devDependencies
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],

        // permite importar arquivos (jsx?|tsx?) sem precisar da extensão
        'import/extensions': [
          'error',
          'ignorePackages',
          { ts: 'never', tsx: 'never', js: 'never', jsx: 'never' },
        ],

        // permite JSX em arquivos .tsx
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

        // afrouxa algumas regras específicas do TypeScript
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',

        // 'react/react-in-jsx-scope': 'off',
      },
    },
  ],
}
