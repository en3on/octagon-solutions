import React, {Component} from 'react';
import {Switch} from 'react-router-dom';
import RootRoutes from './RootRoutes';
import UserRoutes from './UserRoutes';
import AdminRoutes from './AdminRoutes';
// import BookingRoutes from './BookingRoutes';
import ErrorRoutes from './ErrorRoutes';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <RootRoutes />
        <UserRoutes />
        <AdminRoutes />
        {/* <BookingRoutes /> */}
        <ErrorRoutes />
      </Switch>
    )
  }
}

export default Routes;
