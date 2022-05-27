const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.config.base.js')
console.log(base)
module.exports = {
  ...base,
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};