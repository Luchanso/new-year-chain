const path = require('path');

module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, './src')],
      },
    },
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'max-len': ['error', { code: 80 }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.story.js', '**/*.story.jsx'],
      },
    ],
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          {
            name: 'styled components',
            message:
              "Please change styled-components/macro on 'styled-components'.",
          },
        ],
        patterns: ['styled-components/macro'],
      },
    ],
  },
};
