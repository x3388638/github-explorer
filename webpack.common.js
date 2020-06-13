const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: [
    'intl-pluralrules',
    '@formatjs/intl-relativetimeformat/polyfill',
    '@formatjs/intl-relativetimeformat/dist/locale-data/en',
    'intersection-observer',
    './index.client.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendor',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  plugins: [new CleanWebpackPlugin({ verbose: true })]
}
