import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../../containers/Home';
import Blog from '../../containers/Blog';
import Contact from '../../containers/Contact';
import Help from '../../containers/Help';
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
          <Route path="/blog" component={Blog} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/help" component={Help} />
        </Switch>
      </Router>
    );
  }
}

export default App;
