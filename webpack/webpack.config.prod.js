const { merge } = require("webpack-merge");
const webpackConfigBase = require("./webpack.config.base.js");
const uglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(webpackConfigBase, {
  devtool: "source-map",
  plugins: [new uglifyJSPlugin({ sourceMap: true })],
});
