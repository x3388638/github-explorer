const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodemonConfig = require('./nodemon.json')

module.exports = {
  entry: './index.client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new webpack.DefinePlugin({
      'process.env.API_PORT': nodemonConfig.env.PORT
    })
  ]
}
