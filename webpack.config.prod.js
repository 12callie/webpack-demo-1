const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./webpack.config.base.js')


module.exports = {
    ...base,
    mode: 'production',
  
    plugins:[
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            runtime: false,
        })
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
};