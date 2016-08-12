var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

  entry: [
    './src/main.ts',
    './src/app/smaccs/main.scss',
    './src/app/smaccs/theme.scss',
  ],

  output: {
    path: './dist_theme',
    filename: 'app.bundle.js'
  },

  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'raw'},
      {test: /\.(png|jpg|gif|svg)$/,loader: "file-loader?name=img/img-[hash:6].[ext]"},
      {test: /\.(svg|woff|woff2|ttf|eot|ico)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file?name=fonts/[name].[hash].[ext]?'},
      {test: /\.scss$/,loader: ExtractTextPlugin.extract('style','css!sass')}
    ]
  },


  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css', '.jpg', '.png']
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ]




};
