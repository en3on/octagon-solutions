import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import SignInPage from '../user/SignInPage';
import RegisterPage from '../user/RegisterPage';
import UserDashBoard from '../user/UserDashboard';
import EditUserPage from '../user/EditUserPage';


class UserRoutes extends Component {
  render() {
    return (
      <>
      <Route path="/signin" component={SignInPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/user/:id" component={UserDashBoard} />
      <Route path="user/edit/:id/" component={EditUserPage} />
      </>
    );
  }
};

export default UserRoutes;