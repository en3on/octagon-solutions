import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../landing/Home';

class RootRoutes extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/" component={Home} />
      </Switch>
    );
  }
};

export default RootRoutes;