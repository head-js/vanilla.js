module.exports = {
  root: true,

  env: {
    browser: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true
    },
  },

  plugins: [
    'eslint-plugin-import',
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-sonarjs'
  ],

  extends: [
    'plugin:eslint-plugin-import/typescript',
    'plugin:eslint-plugin-import/recommended',
    'plugin:@typescript-eslint/eslint-plugin/recommended',
    'plugin:eslint-plugin-sonarjs/recommended',
  ],

  rules: {
  },
};
