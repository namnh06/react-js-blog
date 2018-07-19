import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../containers/Home';
import NotFoundPage from '../../containers/404';
import './styles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/404" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
