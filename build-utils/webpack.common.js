const commonPaths = require('./common-paths')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/sketch.js',
  output: {
    filename: '[chunkhash].bundle.js',
    path: commonPaths.outputPath
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new htmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["env", {
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 7"]
                }
              }]
            ]
          }
        }
      }
    ]
  }
}

module.exports = config
