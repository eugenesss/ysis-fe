const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@app": path.resolve(__dirname, "src/"),
      "@container": path.resolve(__dirname, "src/container"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
};
