import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import PageNotFound from '../app/PageNotFound';

class ErrorRoutes extends Component {
  render() {
    return (
        <Route component={PageNotFound} />
    );
  }
};

export default ErrorRoutes;