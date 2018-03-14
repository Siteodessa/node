const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    'main': './src/main.js',
    'firestarter': './src/firestarter.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: "dist/[name]/[name].js"
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
       'style-loader',
       'css-loader'
     ]
   },
          {
              test: /\.js(x)$/,
              exclude: /node_modules/,
              loader: "babel-loader",
                  query: {
                 presets:['react','es2015']
            }
          }
 ]
  },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "/[name]/",
        hot: true
    },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      chunks: ['main'],
      title: "Главная страница",
      filename: '/main.html'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      chunks: ['firestarter'],
      title: "Страница firestarter",

      filename: '/firestarter.html'
    }),
     new webpack.HotModuleReplacementPlugin()
  ]
};
