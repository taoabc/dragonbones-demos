const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: {
    'dragonbones-phaser': path.resolve(__dirname, '../src/dragonbones-phaser/index.ts'),
    // 'dragonbones-phaser.min': path.resolve(__dirname, '../src/index.ts'),
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },

  output: {
    path: `${__dirname}/../Demos/libs`,
    library: 'dragonBonesPhaser',
    libraryTarget: 'umd'
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
  }
}