Jest setup

yarn add -D jest

package.json:
"scripts": {"test": "jest --watchAll"}

yarn add -D @types/jest

yarn add --dev babel-jest @babel/core @babel/preset-env

babel.config.js:
module.exports = {
presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
