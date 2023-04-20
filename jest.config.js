/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testEnvironment: 'node',
  preset: 'ts-jest/presets/default-esm',
  transform: {
    '^.+\\.m?[t]s?$': ['ts-jest', { useESM: true, tsconfig: 'tsconfig.spec.json' }],
  },
  transformIgnorePatterns: [],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/tests/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx)'],
  testTimeout: 10000,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.mts', '!src/**/*.d.ts', '!src/**/*.d.mts'],
}
