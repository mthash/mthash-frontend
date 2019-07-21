const path = require("path");
// const withTypescript = require("@zeit/next-typescript");

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    config.resolve = {
      extensions: [".js", ".json", ".jsx", ".ts", ".tsx", ".svg", ".png"],
      alias: {
        ...config.resolve.alias,
        "~": path.resolve(__dirname, ".")
      }
    };

    return config;
  }
};
