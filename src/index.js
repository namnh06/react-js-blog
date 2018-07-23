import 'bootstrap/dist/js/bootstrap';
import 'jquery';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './hoc/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import configureStore from './helpers/redux.config';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

library.add(faFilePdf);

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
