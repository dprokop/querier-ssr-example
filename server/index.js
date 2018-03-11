const fs = require('fs');
const express = require('express');
const noFavicon = require('express-no-favicons');
const getPaths = require('../config/paths');

let isBuilt = false;

const DEV = process.env.NODE_ENV === 'development';

const paths = getPaths(process.env.NODE_ENV);

const app = express();

const done = (result) => {
  !isBuilt &&
    app.listen(process.env.port || 3000, () => {
      isBuilt = true;
    });
}

app
  .use(noFavicon())

if (DEV) {
  const configDevServer = require('./dev/devServer');
  configDevServer(app, done);
  app.use(paths.publicPath, express.static(paths.clientBuild));
} else {
  const clientStats = JSON.parse(fs.readFileSync(paths.clientBuildStats, 'utf8'));
  const serverRender = require('./main.js').default;
  app.use(paths.publicPath, express.static(paths.clientBuild));
  app.use(serverRender({clientStats}));

  done();
}
