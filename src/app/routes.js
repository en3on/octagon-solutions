import React, {Component} from 'react';
import RootRoutes from './RootRoutes';
import UserRoutes from './UserRoutes';
// import AdminRoutes from './AdminRoutes';
// import BookingRoutes from './BookingRoutes';
// import ErrorRoutes from './ErrorRoutes';


class Routes extends Component {
  render() {
    return (
      <>
        <RootRoutes />
        <UserRoutes />
        {/* <AdminRoutes /> */}
        {/* <BookingRoutes /> */}
        {/* <ErrorRoutes /> */}
      </>
    )
  }
}

export default Routes;
