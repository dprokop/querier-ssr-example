const loaders = require('../loaders');
const getPaths = require('../paths');

module.exports = storybookBaseConfig => {
  const newConfig = { ...storybookBaseConfig };
  newConfig.resolve = {
    ...storybookBaseConfig.resolve,
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules', getPaths().rootDir, getPaths().appNodeModules, getPaths().appSrc]
  },
  newConfig.module.rules = [
    loaders.tsLoaderConfig(),
    loaders.cssStorybookLoaderConfig(),
    loaders.fontLoader()
  ];

  newConfig.resolve.alias = {
    ...storybookBaseConfig.resolve.alias,
  };

  // Return the altered config
  return newConfig;
};
