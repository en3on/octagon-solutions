import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import AdminDashBoard from '../admin/AdminDashboard';
import UserProfileView from '../admin/UserProfileView';

class AdminRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/admin" component={AdminDashBoard} />
        <Route exact path="/admin/user/:id" component={UserProfileView} />
      </Switch>
    );
  }
};

export default AdminRoutes;