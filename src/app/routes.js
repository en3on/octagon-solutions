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

class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route path="/signin" component={SignInPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/user">
          <Route path="/:id">
            <Route path="/edit" component={EditUserPage} />
            <Route path="/documents" component={DocumentsPage} />
            <Route path="/" component={UserDashBoard} />
          </Route>
          <Route path="/:id/edit" component={EditUserPage} />
          <Route path="/:id/documents" component={DocumentsPage} />
        </Route>
        <Route path="/admin">
          <Route path="/user/:id" component={UserProfileView} />
          <Route path="/" component={AdminDashBoard} />
        </Route>
        <Route path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    )
  }
}

export default Routes;
