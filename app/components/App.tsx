import routes from 'app/routes';
import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader';

const css = require('./App.css');
class App extends React.Component<{}, {}> {

  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={css.App}>
          {renderRoutes(routes)}
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
