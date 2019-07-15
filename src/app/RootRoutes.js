import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from '../landing/Home';

class RootRoutes extends Component {
  render() {
    return (
      <Route exact path="/" component={Home} />
    );
  }
};

export default RootRoutes;