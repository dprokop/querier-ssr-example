import '@babel/polyfill';
import 'index.css';

import App from 'components/App';
import { configureStore } from 'data/store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { history } from 'services/navigation';
import Querier, { QuerierProvider } from 'querier';

// tslint:disable-next-line
const render = (Component: any) => {
  const store = configureStore();
  const querier = new Querier(window.__PRELOADED_DATA__, store.dispatch);
  window.Querier = querier;

  const appComponent = (
    <QuerierProvider querier={querier}>
      <Provider store={store}>
        <Router history={history()}>
          <App />
        </Router>
      </Provider>
    </QuerierProvider>
  );

  ReactDOM.hydrate(
    appComponent,
    document.getElementById('root')
  );

  // if (process.env.NODE_ENV === 'development' && module && module.hot) {
  //   module.hot.accept('./components/App', () => {
  //     const AppComponent = require('./components/App').default;
  //     render(AppComponent);
  //   });
  // }
};

render(App);
