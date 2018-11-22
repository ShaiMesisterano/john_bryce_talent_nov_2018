import React, { Component } from 'react';
import AboutUs from './AboutUs';
import Gists from './Gists';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      // <div class="container"><Gists /></div>
      <Router history={history}>
        <Switch>
            <Route exact path="/" component={Gists}></Route>
            <Route component={AboutUs}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
