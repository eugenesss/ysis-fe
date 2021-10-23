const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@app": path.resolve(__dirname, "src/"),
      "@container": path.resolve(__dirname, "src/container"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  jest: {
    configure: {
      collectCoverage: true,
      collectCoverageFrom: [
        "src/**/*.{ts, tsx}",
        "!**/node_modules/**",
        "!**/.config.ts",
        "!**/.mock.ts",
      ],
      moduleFileExtensions: ["ts", "tsx"],
      testMatch: ["**/*.spec.ts", "**/*.spec.tsx"],
      verbose: true,
    },
  },
};
