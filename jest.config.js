// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};

// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // ...
};

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    // 'node_modules/(?!(jest-)?react-native|@?react-navigation|@react-native-community/async-storage/(?!(lib)))',
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@?react-navigation)',
  ],
  testMatch: [
    '**/__tests__/**/!(*.test-data).[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  setupFiles: ['./jest_setup.js'],
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
