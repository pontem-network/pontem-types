module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: 'tsconfig.json',
    },
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  rootDir: './src',
  collectCoverage: true,
  testMatch: [
    '**/*.test.js',
    '**/*.test.ts',
    '!**/*.int.test.js',
    '!**/*.int.test.ts',
  ],
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testResultsProcessor: 'jest-sonar-reporter',
  setupFiles: ['../jest.setup.js'],
  coverageDirectory: '../coverage',
};
