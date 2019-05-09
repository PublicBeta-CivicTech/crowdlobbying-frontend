const path = require('path')
const webpack = require('webpack')

module.exports = {
  watch: false,
  entry: {
    app: './src/assets/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist/assets/js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
