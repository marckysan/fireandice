module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  rootDir: './',
  transformIgnorePatterns: [
    // 'node_modules/(?!(jest-)?react-native|@?react-navigation|@react-native-community/async-storage/(?!(lib)))',
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@?react-navigation)',
  ],
  testMatch: [
    '**/__tests__/**/!(*.test-data).[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  setupFiles: ['./jest_setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverage: true,
  // collectCoverageFrom: ['../screens/*.js'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/index.js',
    '!**/.eslintrc.js',
    '!**.prettierrc.js',
    '!**/babel.config.js',
    '!**/jest.config.js',
    '!**/metro.config.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'package.json',
    'package-lock.json',
  ],
  coverageDirectory: './coverage',
};
