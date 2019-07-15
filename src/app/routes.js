import React, {Component} from 'react';
import {Switch} from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <RootRoutes />
        <UserRoutes />
        <AdminRoutes />
        <BookingRoutes />
        <ErrorRoutes />
      </Switch>
    )
  }
}

export default Routes;
