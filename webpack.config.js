const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/testthis.js',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    port: 9090
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, path.resolve('./src/testthis.js')],
        loader: 'eslint-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mutant Fight Club'
    })
  ]
};
