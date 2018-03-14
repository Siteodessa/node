  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const webpack = require('webpack');
// adds mulitple js bundles which can import files via import too , brilliant . eto pisal ti, pereimenui file v webpack.config.js 
  module.exports = {
      entry: {
          app: './src/index.js',
          firestarter: './src/firestarter.js',

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
          contentBase: './dist',
          hot: true
      },
      plugins: [
      new HtmlWebpackPlugin({
              title: 'Second_project'
          }),
     new webpack.HotModuleReplacementPlugin()
    ],
      output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist')
      }
  };
