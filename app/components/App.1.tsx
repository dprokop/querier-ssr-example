
import routes from 'app/routes';
import * as importCss from 'babel-plugin-universal-import/importCss.js';
import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import universal from 'react-universal-component';
import { navigateTo } from 'services/navigation';

const load = () => Promise.all([
  import(/* webpackChunkName: 'Example' */ './Example'),
  importCss('Example')
]).then(proms => proms[0]);

const UniversalExample = universal(load, {
  chunkName: () => 'Example',
  resolve: () => require.resolveWeak('./Example')
  // tslint:disable-next-line
} as any);

interface AppState {
  show: boolean;
}

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ show: true });
  }

  componentDidMount() {
    if (this.state.show) {
      return;
    }

    setTimeout(
      () => {
        // tslint:disable-next-line
        console.log('now showisng <Example />');
        this.setState({ show: true });
      },
      1500
    );
  }

  render() {
    return (
      <div>
        <div onClick={() => navigateTo('/')}>Home</div>
        <div onClick={() => navigateTo('/static')}>Static</div>
        <div onClick={() => navigateTo('/product/8010')}>product</div>

        {this.state.show && <UniversalExample />}
        {!this.state.show && <div onClick={this.handleClick}>Async Component Not Requested Yet</div>}
        {renderRoutes(routes)}
      </div>
    );
  }
}

export default App;
