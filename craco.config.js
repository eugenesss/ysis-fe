const path = require('path');

module.exports = {
  webpack: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@app': path.resolve(__dirname, './src/'),
      '@container': path.resolve(__dirname, './src/container'),
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
    },
  },
  jest: {
    configure: {
      collectCoverage: true,
      collectCoverageFrom: [
        'src/**/*.{ts, tsx}',
        '!**/index.ts',
        '!src/*',
        '!**/node_modules/**',
        '!**/*.config.{ts, tsx}',
        '!**/*.mock.{ts, tsx}',
      ],
      moduleFileExtensions: ['.ts', '.tsx'],
      testMatch: ['<rootDir>/spec/**/*.{spec}.{ts,tsx}'],
      verbose: true,
      testEnvironment: 'jsdom',
    },
  },
};
