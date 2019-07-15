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
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/user/:id" component={UserDashBoard} />
        <Route exact path="/user/edit/:id" component={EditUserPage} />
        <Route exact path="/admin" component={AdminDashBoard} />
        <Route exact path="/admin/user/:id" component={UserProfileView} />
        { /* Add Bookings Routes at later task */ }
        {/* Add Documents Routes at a later task  */}
        <Route component={PageNotFound} />
      </Switch>  
    )
  }
}

export default Routes;
