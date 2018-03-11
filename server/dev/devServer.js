const getPaths = require('../../config/paths');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const getCompiler = require('./compiler');

const configDevServer = (app, done) => {
  const paths = getPaths(process.env.NODE_ENV);
  const options = { publicPath: paths.publicPath, stats: "none", logLevel: "warn" }
  const compiler = getCompiler(process.env.NODE_ENV);

  app.use(webpackDevMiddleware(compiler, options))
  app.use(webpackHotMiddleware(compiler.compilers[0]))
  app.use(webpackHotServerMiddleware(compiler))
  compiler.plugin('done', done)
}

module.exports = configDevServer;
