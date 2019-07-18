import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../landing/Home';
import SignInPage from '../user/SignInPage';
import RegisterPage from '../user/RegisterPage';
import UserDashBoard from '../user/UserDashboard';
import EditUserPage from '../user/EditUserPage';
import AdminDashBoard from '../admin/AdminDashboard';
import UserProfileView from '../admin/UserProfileView';
import PageNotFound from './PageNotFound';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/user/:id" component={UserDashBoard} />
        <Route path="/user/edit/:id" component={EditUserPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/admin" component={AdminDashBoard} />
        <Route path="/admin/user/:id" component={UserProfileView} />

        <Route component={PageNotFound} />
      </Switch>  
    )
  }
}

export default Routes;
