const { join } = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const mode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const path = join(__dirname, 'public')

module.exports = {
  mode,
  entry: './demo.js',
  output: {
    path,
    filename: 'demo.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    ...(mode === 'production' ? [
      new PurgecssPlugin({ paths: ['./index.html'] }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          discardComments: { removeAll: true }
        }
      }),
      new MiniCssExtractPlugin()
    ] : [])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          mode === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: { plugins: [require('autoprefixer')()] }
          }
        ],
      }
    ]
  }
}
