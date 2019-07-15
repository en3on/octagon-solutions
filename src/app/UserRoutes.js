import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import SignInPage from '../user/SignInPage';
import RegisterPage from '../user/RegisterPage';
import UserDashBoard from '../user/UserDashboard';
import EditUserPage from '../user/EditUserPage';


class UserRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/user/:id" component={UserDashBoard} />
        <Route exact path="/user/edit/:id" component={EditUserPage} />
      </Switch>
    );
  }
};

export default UserRoutes;