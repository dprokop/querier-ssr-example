const getPaths = require('./paths');
const loaders = require('./loaders');
const plugins = require('./plugins');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

const CLIENT_CONFIG_NAME = 'client';

const clientConfig = (env, argv) => {
  const DEV = process.env.NODE_ENV === 'development';
  const paths = getPaths(process.env.NODE_ENV);

  const entry = DEV ? [
    'normalize.css',
    paths.clientEntry
  ] : [
    'normalize.css',
    paths.clientEntry
  ];

  return {
    name: CLIENT_CONFIG_NAME,
    target: 'web',
    devtool: DEV ? 'cheap-source-map' : 'source-map',
    entry,
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: paths.clientBuildTarget,
      publicPath: paths.publicPath
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: ['node_modules', './', getPaths().appNodeModules, getPaths().appSrc]
    },
    module: {
      rules: [
        // loaders.tslintLoaderConfig(),
        loaders.sourceMapsLoaderConfig(),
        {
          oneOf: [
            loaders.tsLoaderConfig(false),
            loaders.cssLoaderConfig(false, true)
          ]
        },
        loaders.fontLoader()
      ]
    },
    plugins: plugins.getClientPlugins()
  }
};

module.exports = clientConfig;
