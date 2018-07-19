import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import './index.css';
import App from './hoc/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './helpers/redux.config';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
