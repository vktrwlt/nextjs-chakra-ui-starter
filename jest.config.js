module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/pages(.*)$': '<rootDir>/src/pages$1',
    '^@/templates(.*)$': '<rootDir>/src/templates$1',
    '^@/theme(.*)$': '<rootDir>/src/theme$1',
    '^@/utils(.*)$': '<rootDir>/src/utils$1',
    '^@/assets(.*)$': '<rootDir>/src/assets$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
  },
  // coverage
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
