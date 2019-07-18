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
import DocumentsPage from '../fileUpload/DocumentsPage';
import ProtectedRoutes from './ProtectedRoutes';


class Routes extends Component {

  render() {
    const {authToken} = this.props;
    return (
      <Switch>
        <Route path="/signin" component={SignInPage} />
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/" component={Home} />
        <ProtectedRoutes auth={authToken} />
        <Route component={PageNotFound} />
      </Switch>
    )
  }
}

export default Routes;
