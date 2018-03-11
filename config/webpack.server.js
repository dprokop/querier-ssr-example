const fs = require('fs');
const getPaths = require('./paths');
const loaders = require('./loaders');
const plugins = require('./plugins');

const SERVER_CONFIG_NAME = 'server';

const clientConfig = (env, argv) => {
  const DEV = process.env.NODE_ENV === 'development';
  const paths = getPaths(process.env.NODE_ENV);

  let externals = [];

  let rules = [
    // loaders.tslintLoaderConfig(),
    // loaders.sourceMapsLoaderConfig(),
    {
      oneOf: [
        loaders.tsLoaderConfig(!DEV),
        loaders.cssLoaderConfig(true, false, /node_modules/)
      ]
    },
    // loaders.fontLoader()
  ];

  if (DEV) {
    externals = fs
      .readdirSync(paths.appNodeModules)
      .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
      .reduce((externals, mod) => {
        externals[mod] = `commonjs ${mod}`
        return externals
      }, {})
    externals['react-dom/server'] = 'commonjs react-dom/server'
  }

  if(!DEV) {
    rules = rules.concat([loaders.jsLoaderConfig()]);
  }

  return {
    name: SERVER_CONFIG_NAME,
    target: 'node',
    devtool: DEV ? 'cheap-source-map' : 'source-map',
    entry: ['babel-polyfill', paths.serverEntry],
    output: {
      path: paths.serverBuildTarget,
      filename: '[name].js',
      libraryTarget: 'commonjs2'
    },
    externals,
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: ['node_modules', './', getPaths().appNodeModules, getPaths().appSrc]
    },
    module: {
      rules
    },
    plugins: plugins.getServerPlugins()
  }
};

module.exports = clientConfig;
