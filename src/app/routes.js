import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from '../landing/Home';
import SignInPage from '../user/SignInPage';
import RegisterPage from '../user/RegisterPage';
import UserProfileView from '../admin/UserProfileView';
import PageNotFound from '../app/PageNotFound';
import DashBoard from '../user/DashBoard';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/admin/user/:id" component={UserProfileView} />
        <Route path="/user/:id" component={DashBoard} />
        <Route path="user/edit/:id/" component={EditUserForm} />
        <Route component={PageNotFound} />
      </Switch>
    )
  }
}

export default Routes;
