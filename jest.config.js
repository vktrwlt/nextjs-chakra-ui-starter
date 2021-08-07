module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '^~/components(.*)$': '<rootDir>/src/components$1',
    '^~/utils(.*)$': '<rootDir>/src/utils$1',
  },
  // coverage
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
