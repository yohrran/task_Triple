const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({
  type: 'frontend',
})

module.exports = {
  extends: [
    ...extendConfigs,
    'react-app',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:import/recommended',
  ],
  plugins: ['jsx-a11y', 'prettier'],
  overrides: [...overrides],
  rules: {
    semi: true,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/label-has-associated-control': [2, { assert: 'htmlFor' }],
    'no-promise-executor-return': 0,
    'no-param-reassign': 0,
    'no-console': 2,
    'react/jsx-no-bind': 0,
    'no-plusplus': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    camelcase: [2, { allow: ['_id'] }],
    'react/jsx-boolean-value': 0,
    'no-restricted-syntax': [0, 'ForOfStatement'],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 'off',
    caseSensitive: 0,
  },
}
