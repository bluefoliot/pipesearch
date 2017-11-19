var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public/js');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules' },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules' }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: { context: __dirname}}),
    new webpack.ProgressPlugin()
  ],
  node: {
    fs: 'empty'
  }
};

module.exports = config;
