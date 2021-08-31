module.exports = {
  collectCoverage: true,
  coverageDirectory: '../coverage',
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  rootDir: './src',
  setupFiles: ['../jest.setup.js'],
  testMatch: [
    '**/*.test.js',
    '**/*.test.ts',
    '!**/*.int.test.js',
    '!**/*.int.test.ts',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
