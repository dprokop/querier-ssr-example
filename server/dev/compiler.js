const webpack = require('webpack')
const formatMessages = require('webpack-format-messages');
const clientConfig = require('../../config/webpack.client');
const serverConfig = require('../../config/webpack.server');
const logStats = require('./stats');
const chalk = require('chalk');

const applyPlugins = (compiler) => {
  compiler.plugin('invalid', () => {
    console.log('\x1Bc');
    console.log('Compiling...')
  });

  compiler.plugin('done', stats => {
    // console.log('\x1Bc');
    const messages = formatMessages(stats);

    if (messages.errors.length) {
      console.log(chalk.bold.red('✗ Failed to compile!\n'));
      messages.errors.forEach(e => console.log(e));
      return;
    }

    if (messages.warnings.length) {
      logStats(stats, chalk.bold.yellow('! Compiled with warnings'));
      messages.warnings.forEach(w => console.log(w));
    } else {
      logStats(stats, chalk.bold.green('✓ Successfully compiled'));
    }
  });

  return compiler;
};

const getCompiler = (env) => {
  const DEV = env === 'development'
  const compiler = webpack([clientConfig(), serverConfig()]);

  if (DEV) {
    return applyPlugins(compiler);
  }

  return compiler;
};

module.exports = getCompiler;
