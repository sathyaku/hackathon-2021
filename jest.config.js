module.exports = {
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: [
    '!**/*.style.js',
    '!**/*.spec.js',
    '!**/cypress/**',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/static/**',
    '!**/.next/**',
    '!**/pages/**',
    '!**/coverage/**',
    '!**/public/**',
    '!jest.config.js',
    '!cypress.json',
    '!.eslintrc.json',
    '!package-lock.json',
    '!package.json',
    '!jsconfig.json'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  setupFiles: ['<rootDir>/configs/jest/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/configs/jest/setupAfterEnv.js'],
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '/tests/',
    '/public',
    '/static',
    '/coverage/',
    '/cypress/',
    '/pages/api/',
    '/cypress.json',
    '/.eslintrc.json',
    '/package-lock.json',
    '/package.json',
    '/jsconfig.json'
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
