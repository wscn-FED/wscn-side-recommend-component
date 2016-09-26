var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./config');

var componentId = 'react-' + config.componentName.toLowerCase();

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    library: config.componentName,
    libraryTarget: 'umd',
    filename: componentId +'.min-[chunkhash].js',
    path: path.join(__dirname, 'build')
  },
  externals: {
    'react': {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'axios': {
      root: 'axios',
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
        include: [path.join(__dirname, 'lib'), path.join(__dirname, 'index.js')]
      },
     {
        test: /\.css$/,
        include: [path.join(__dirname, 'lib')],
        // Disable autoprefixer in css-loader itself:
        // https://github.com/webpack/css-loader/issues/281
        // We already have it thanks to postcss.
        loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss')
      },
    ]
  },
  node: {
    Buffer: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('./'+ componentId +'.min-[chunkhash].css')
  ]
}
