module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: ["react-hooks", "jquery"],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:jquery/deprecated",
  ],
  rules: {
    "react/prop-types": [0],
    "import/prefer-default-export": [0], // essa regra é irritante
    "jsx-a11y/media-has-caption": [0],
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["draft", "acc"] },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx"],
      },
    },
  },
};
