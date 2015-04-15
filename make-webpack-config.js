var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(options) {

  var entry = [
    './scripts/index'
  ];

  if(options.hotComponents) {
    entry.push(
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server'
    );
  }

  var plugins = [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ];

  if(options.hotComponents) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    entry: entry,

    plugins: plugins,

    output: {
      path: path.join(__dirname, 'build'),
      publicPath: options.devServer ? '' : '/build/',
      filename: 'bundle.js'
    },

    resolve: {
      extensions: ['', '.js', '.jsx']
    },

    module: {
      loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: options.hotComponents ? 'react-hot-loader!babel-loader' : 'babel-loader',
      }, {
        test: /\.(json(\?.*)?)$/,
        loaders: ['json-loader']
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {
          publicPath: ''
        })
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader', {
          publicPath: ''
        })
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }]
    }
  }
};

