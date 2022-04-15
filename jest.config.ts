export default {
  testMatch: ['**/src/**/*.test.ts?(x)', '**/src/**/*.spec.ts?(x)'],
  clearMocks: true,
  collectCoverage: true,
  preset: 'ts-jest',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
};
