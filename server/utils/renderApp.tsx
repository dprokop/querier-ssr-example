import App from 'components/App';
import { StoreShape } from 'data/store';
import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import { Provider, Store } from 'react-redux';
import { StaticRouter } from 'react-router';
import { flushChunkNames } from 'react-universal-component/server';
import { Stats } from 'webpack';
import flushChunks from 'webpack-flush-chunks';
import { QuerierType, QuerierProvider } from 'querier';

const renderApp = (
  url: string,
  store: Store<StoreShape>,
  querier: QuerierType,
  clientStats: Stats
) => {
  try {
    const app = ReactDOM.renderToString(
      <QuerierProvider querier={querier}>
        <Provider store={store} >
          <StaticRouter location={url} context={{}}>
            <App />
          </StaticRouter>
        </Provider>
      </QuerierProvider>
    );

    const chunkNames = flushChunkNames();

    const {
      js,
      styles,
      cssHash
    } = flushChunks(clientStats, { chunkNames });

    return (
      `<!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Querier demo</title>
            ${styles}
          </head>
          <body>
            <div id="root">${app}</div>
            ${cssHash}
            <script>
              window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
              window.__PRELOADED_DATA__ = ${JSON.stringify(querier.getStore()).replace(/</g, '\\u003c')}
            </script>
            ${js}
          </body>
      </html>`
    );
  } catch (e) {
    // tslint:disable-next-line
    console.log(e);
    throw e;
  }
};

export default renderApp;
