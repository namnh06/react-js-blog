import { Router, Switch, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';

import Article from '../../containers/Article';
import Blog from '../../containers/Blog';
import Contact from '../../containers/Contact';
import Help from '../../containers/Help';
import Home from '../../containers/Home';
import NotFoundPage from '../../containers/404';

import './styles.css';

export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/404" component={NotFoundPage} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:slug" component={Article} />
          <Route path="/contact" component={Contact} />
          <Route path="/help" component={Help} />
        </Switch>
      </Router>
    );
  }
}

export default App;
