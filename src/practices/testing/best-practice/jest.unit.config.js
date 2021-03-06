// https://jestjs.io/docs/en/configuration.html
module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  verbose: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  testMatch: [
    // note: order matters
    '**/*.test.ts',
    '!**/*.acceptance.test.ts',
    '!**/*.integration.test.ts',
  ],
  setupFiles: ['core-js'],
  setupFilesAfterEnv: ['./jest.unit.env.js'],
};
