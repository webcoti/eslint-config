module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    require.resolve('./index.js'),
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // permite importar types, que geralmente são instalados como devDependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

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

    'react/react-in-jsx-scope': 'off',
  },
}
