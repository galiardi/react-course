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

jest.config.js:
module.exports = {
testEnvironment: "jest-environment-jsdom",
setupFiles: ["./jest.setup.js"],
};

yarn add -D whatwg-fetch

jest.setup.js:
import 'whatwg-fetch';

yarn add -D @testing-library/react

yarn add -D jest-environment-jsdom
