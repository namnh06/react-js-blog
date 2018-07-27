import 'bootstrap/dist/js/bootstrap';
import 'jquery';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './hoc/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
// import configureStore from './helpers/redux.config';
import store from './store';

import fontAwesome from './helpers/fontAwesome.config';
import { isExistsToken } from './helpers';

// const store = configureStore();
fontAwesome();
isExistsToken();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
