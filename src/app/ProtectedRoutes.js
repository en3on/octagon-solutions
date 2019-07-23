import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import UserDashBoard from '../user/UserDashboard';
import UserEditPage from '../user/UserEditPage';
import DocumentsPage from '../fileUpload/DocumentsPage'; 
import fileUploadForm from '../fileUpload/FileUploadForm';  
import PageNotFound from './PageNotFound';
import UserProfileView from '../admin/UserProfileView';
import AdminDashboard from '../admin/AdminDashboard';

class ProtectedRoutes extends Component {
  constructor(props) {
    super(props);

    this.state = { authToken: this.props.authToken }

    this.Users = this.Users.bind(this);
    this.Admin = this.Admin.bind(this);
  }

  Users({match}) {
    return (
      <Switch>
        <Route path={`${match.path}/edit`} component={UserEditPage} />
        <Route path={`${match.path}/documents/upload`} component={fileUploadForm} />
        <Route path={`${match.path}/documents`} component={DocumentsPage} />
        <Route exact path={match.path} component={UserDashBoard} />
        <Route component={PageNotFound} />
      </Switch>
    )
  }

  Admin({match}) {
    return (
      <Switch>
        <Route path={`${match.url}/user/:id`} component={UserProfileView} />
        <Route exact path={match.path} component={AdminDashboard} />
        <Route component={PageNotFound} />
      </Switch>
    )
  }


  render() {
    if(this.state.authToken) {
      return (
        <>
        {this.props.match.path.includes('admin') ? <Route component={this.Admin} /> : <Route component={this.Users} />}
        </>
      )
    } else {
      return (
        <Redirect to='/signin' />
      )
    }
  }
}

export default ProtectedRoutes;