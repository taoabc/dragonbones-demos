const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    'app': path.resolve(__dirname, '../src/index.ts'),
    // 'dragonbones-phaser.min': path.resolve(__dirname, '../src/index.ts'),
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },

  output: {
    path: `${__dirname}/../dist/`,
  },

  // optimization: {
  //   minimizer: [
  //     new UglifyJSPlugin({
  //       include: /\.min\.js$/,
  //       parallel: true,
  //       sourceMap: false,
  //       uglifyOptions: {
  //         compress: true,
  //         ie8: false,
  //         ecma: 5,
  //         output: { comments: false },
  //         warnings: false
  //       },
  //       warningsFilter: () => false
  //     })
  //   ]
  // },

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
    new HtmlWebpackPlugin({
      template: `${__dirname}/../template.html`
    }),
    new CopyWebpackPlugin([
      { from: `${__dirname}/../resource/`, to: 'resource/' }
    ])
  ],

  devServer: {
    // contentBase: `${__dirname}/../dist`,
    publicPath: `dist`,
    compress: true,
    port: 9000
  }
}