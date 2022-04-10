const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    libraryTarget: "system",
    path: path.resolve('dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    port: 4006,
  },
};