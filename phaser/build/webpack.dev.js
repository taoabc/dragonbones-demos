const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// TODO not work
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    'app': path.resolve(__dirname, '../src/index.ts'),
    // 'dragonbones-phaser.min': path.resolve(__dirname, '../src/index.ts'),
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'dragonbones-phaser': path.resolve(__dirname, '../../dragonbones-phaser/src'),
      'libdragonbones': path.resolve(__dirname, '../../libdragonbones/src'),
    }
  },

  output: {
    path: path.resolve(__dirname, '../dist/'),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      { test: /\.js$/, use: ['babel-loader'] },
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/../template.html`
    }),
    new CopyWebpackPlugin([
      { from: `${__dirname}/../../dragonbones-resource/`, to: 'resource/' }
    ]),
  ],

  devServer: {
    // contentBase: `${__dirname}/../dist`,
    // publicPath: 'Demos/dist/',
    // compress: true,
    port: 9000
  }
}