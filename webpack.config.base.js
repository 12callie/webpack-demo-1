const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Development', 
      template: 'src/assets/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options:{
              implementation: require('dart-sass'),
            }
          }
        ],
      },
      {
        test: /\.less$/i,
        loader: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.styl$/,
        loader: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
};