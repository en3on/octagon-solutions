import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import UserDashBoard from '../user/UserDashboard';
import EditUserPage from '../user/EditUserPage';
import AdminDashBoard from '../admin/AdminDashboard';
import UserProfileView from '../admin/UserProfileView';
import DocumentsPage from '../fileUpload/DocumentsPage';
import PageNotFound from './App';

class ProtectedRoutes extends Component {
  constructor(props) {
    super(props);

    this.state = { authToken: this.props }
  }

  render() {
    console.log(this.state.authToken);
    if(this.state.authToken) {
      console.log('authtoken verified');
      return (
      <>
        <Route path="/user/:id/edit" component={EditUserPage} />
        <Route path="/user/:id/documents" component={DocumentsPage} />
        <Route exact path="/user/:id" component={UserDashBoard} />
        <Route path="/admin/user/:id" component={UserProfileView} />
        <Route exact path="/admin" component={AdminDashBoard} />
      </> 
      )
    } else {
      console.log('authtoken not verified');
      return (
      <Redirect to='/signin' />
      )
    }
  }
}

export default ProtectedRoutes;