import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import UserDashBoard from '../user/UserDashboard';
import EditUserPage from '../user/EditUserPage';
import DocumentsPage from '../fileUpload/DocumentsPage'; 
import PageNotFound from './PageNotFound';

class ProtectedRoutes extends Component {
  constructor(props) {
    super(props);

    this.state = { authToken: this.props.authToken }

    this.Users = this.Users.bind(this);
  }

  Users({match}) {
    return (
      <Switch>
        <Route path={`${match.path}/edit`} component={EditUserPage} />
        <Route path={`${match.path}/documents`} component={DocumentsPage} />
        <Route exact path={match.path} component={UserDashBoard} />
        <Route component={PageNotFound} />
      </Switch>
    )
  }

  render() {
    if(this.state.authToken) {
      return (
        <Route component={this.Users} />
      )
    } else {
      return (
        <Redirect to='/signin' />
      )
    }
  }
}

export default ProtectedRoutes;