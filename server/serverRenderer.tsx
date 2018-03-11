import { configureStore } from 'app/data/store';
import * as express from 'express';
import { Stats } from 'webpack';

import renderApp from './utils/renderApp';
import resolveInitialData from './utils/resolveInitialData';

const serverRenderer = ({ clientStats }: { clientStats: Stats }) =>
  (req: express.Request, res: express.Response) => {
    const store = configureStore(true);

    resolveInitialData(req.url, store).then(
      (querierStore) => {
        res.send(renderApp(req.url, store, querierStore, clientStats));
      },
      (err) => {
        if (err.status === 404) {
          res.redirect('/404');
        } else {
          res.redirect('/error');
        }
      });
  };

export default serverRenderer;
