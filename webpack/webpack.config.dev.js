const { merge } = require("webpack-merge");
const webpackConfigBase = require("./webpack.config.base.js");

module.exports = merge(webpackConfigBase, {
  devtool: "cheap-module-eval-source-map",
});
