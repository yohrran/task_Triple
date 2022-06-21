const createConfig = require('@titicaca/eslint-config-triple/create-config');

const { extends: extendConfigs, overrides } = createConfig({
  type: 'frontend',
});

module.exports = {
  extends: [...extendConfigs, 'react-app', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  overrides: [...overrides],
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'no-console': 'error',
    'no-unused-expressions': 'off',
  },
};
