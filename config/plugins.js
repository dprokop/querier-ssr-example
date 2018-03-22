const webpack = require('webpack');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const getPaths = require('./paths');
function isExternal(module) {
  var context = module.context;

  if (typeof context !== 'string') {
    return false;
  }

  return context.indexOf('node_modules') !== -1;
}

const getClientPlugins = () => {
  const DEV = process.env.NODE_ENV === 'development';

  const commonPlugins = [
    new ExtractCssChunks(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
      filename: '[name].[hash].js',
      minChunks: function(module) {
        return isExternal(module);
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(DEV ? 'development' : process.env.NODE_ENV),
        API_URL: JSON.stringify(process.env.API_URL)
      }
    }),
    new ProgressBarPlugin({
      format: 'Client build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      summary: false,
      clear: false
    })
  ];

  const devPlugins = [
    // webpack-dev-server write to file instead of serving from memory
    new WriteFilePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.WatchIgnorePlugin([/\.css\.d\.ts$/]),
    new WebpackNotifierPlugin(),
  ];

  const prodPlugins = [
    new StatsPlugin('stats.json'),
    new webpack.HashedModuleIdsPlugin(), // only needed when server built with webpack
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        keep_fnames: true,
        keep_classnames: true
      },
      output: {
        screw_ie8: true,
        comments: false
      },
      sourceMap: true
    })
  ];

  return DEV ? commonPlugins.concat(devPlugins) : commonPlugins.concat(prodPlugins);
}

const getServerPlugins = () => {
  const DEV = process.env.NODE_ENV === 'development';

  const commonPlugins = [
    new ProgressBarPlugin({
      format: 'Server build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      summary: false,
      clear: false
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(DEV ? 'development' : process.env.NODE_ENV),
        API_URL: JSON.stringify(process.env.API_URL)
      }
    })
  ];

  const devPlugins = [
    new WriteFilePlugin(),
    new webpack.WatchIgnorePlugin([/\.css\.d\.ts$/]),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      workers: 2,

    }),
  ];

  const prodPlugins = [
    new webpack.HashedModuleIdsPlugin()
  ];

  return DEV ? commonPlugins.concat(devPlugins) : commonPlugins.concat(prodPlugins);
}

module.exports = {
  getClientPlugins,
  getServerPlugins
}
