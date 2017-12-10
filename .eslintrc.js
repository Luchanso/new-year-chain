const path = require('path');

module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "settings": {
    "import/resolver": {
      node: {
        paths: [path.resolve(__dirname, './src')],
      },
    },
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  }
};
