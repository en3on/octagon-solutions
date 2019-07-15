import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import AdminDashBoard from '../admin/AdminDashboard';
import UserProfileView from '../admin/UserProfileView';

class AdminRoutes extends Component {
  render() {
    return (
      <>
        <Route path="/admin" component={AdminDashBoard} />
        <Route exact path="/admin/user/:id" component={UserProfileView} />
      </>
    );
  }
};

export default AdminRoutes;