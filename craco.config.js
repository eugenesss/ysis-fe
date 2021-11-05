const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        // see in examples section
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: './src',
        /* tsConfigPath should point to the file where "baseUrl" and "paths" 
             are specified*/
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
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
