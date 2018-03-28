const fs = require('fs');
const getPaths = require('./paths');
const loaders = require('./loaders');
const plugins = require('./plugins');
const dependencies = require(getPaths().appPackageJson).dependencies;

const SERVER_CONFIG_NAME = 'server';

const clientConfig = (env, argv) => {
  const DEV = process.env.NODE_ENV === 'development';
  const paths = getPaths(process.env.NODE_ENV);

  let externals = [];
  const externalModules = {
    dev: '/\\b(?:.bin|react-universal-component|webpack-flush-chunks)\\b',
    prod: '\\b(?:' + Object.keys(dependencies).map( d => {
      return d
    }).join('|') + ')\\b'
  };
  const externalModulesRegexp = DEV ? new RegExp(externalModules.dev) : new RegExp(externalModules.prod);

  let rules = [
    // loaders.tslintLoaderConfig(),
    // loaders.sourceMapsLoaderConfig(),
    {
      oneOf: [
        loaders.tsLoaderConfig(true),
        loaders.cssLoaderConfig(true, false, /node_modules/)
      ]
    }
    // loaders.fontLoader()
  ];

  externals = fs
    .readdirSync(paths.appNodeModules)
    .filter(
      x => DEV? !externalModulesRegexp.test(x) : externalModulesRegexp.test(x)
    )
    .reduce((externals, mod) => {
      externals[mod] = `commonjs ${mod}`;
      return externals;
    }, {});

  if (DEV) {
    externals['react-dom/server'] = 'commonjs react-dom/server';
  }

  if (!DEV) {
    rules = rules.concat([loaders.jsLoaderConfig()]);
  }

  return {
    name: SERVER_CONFIG_NAME,
    target: 'node',
    devtool: DEV ? 'cheap-source-map' : 'source-map',
    entry: [paths.serverEntry],
    output: {
      path: paths.serverBuildTarget,
      filename: '[name].js',
      libraryTarget: 'commonjs2'
    },
    externals,
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: [
        'node_modules',
        './',
        getPaths().appNodeModules,
        getPaths().appSrc
      ]
    },
    module: {
      rules
    },
    plugins: plugins.getServerPlugins()
  };
};

module.exports = clientConfig;
