import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import DataFetcher from './components/DataFetcher'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <DataFetcher
        component={App}
        dataUrl={'data.json'}
        propName="userData"
      />
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
