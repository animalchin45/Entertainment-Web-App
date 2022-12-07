const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
const config = {
  mode: 'production',
  entry: [path.join(CURRENT_WORKING_DIR, 'client/index.js')],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.[contenthash].css',
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*'],
      }),
    ],
  },
}
module.exports = config
