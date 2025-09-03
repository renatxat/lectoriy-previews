const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.[contenthash].js',
    publicPath: ''
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
     template: path.resolve(__dirname, 'src', 'index.html'),
     filename: 'index.html'
   })
  ],
  resolve: { extensions: ['.jsx', '.js'] },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.css$/, exclude: /node_modules/,
        use: ['style-loader', { loader: 'css-loader', options: { modules: true, importLoaders: 1 } }]
      },
      { test: /(\.ttf|\.png|\.svg)$/, exclude: /node_modules/, use: ['file-loader?name=[name].[ext]'] }
    ]
  }
};
