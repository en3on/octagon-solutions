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
  constructor(props) {
    super(props);

    this.state = {
      authToken: localStorage.getItem('loginToken'),
    }
  }
  
  componentDidMount() {
    this.setState({authToken: localStorage.getItem('loginToken')})
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/user">
          <Route path="/:id" component={UserDashBoard} />
          <Route path="/:id/edit" component={EditUserPage} />
        </Route>
        <Route path="/admin">
          <Route path="/" component={AdminDashBoard} />
          <Route path="/admin/user/:id" component={UserProfileView} />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    )
  }
}

export default Routes;
