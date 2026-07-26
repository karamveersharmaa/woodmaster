const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LwcWebpackPlugin = require('lwc-webpack-plugin');
module.exports = {
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.js']
  },
  optimization: {
    splitChunks: false,
    runtimeChunk: false,
     minimize: false
  },
  plugins: [
    new LwcWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    open: true
  },
  mode: 'production'
};