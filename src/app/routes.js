import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import ContactForm from '../contact/ContactForm';
import SignInForm from '../user/SignInForm';
import RegisterForm from '../user/RegisterForm';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/admin/user/:id" component={UserProfile} />
        <Route path="/user/:id" component={DashBoard} />
        <Route component={PageNotFound} />
      </Switch>
    )
  }
}

export default Routes;
