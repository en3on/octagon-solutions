import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../landing/Home';
import RegisterPage from '../user/RegisterPage';
import PageNotFound from './PageNotFound';
import ProtectedRoutes from './ProtectedRoutes';
import PasswordResetForm from '../user/PasswordResetForm';
import SignInForm from '../user/SignInForm';
import PasswordResetRequestForm from '../user/PasswordResetRequestForm';


class Routes extends Component {

  render() {
    const {authToken} = this.props;
    return (
      <Switch>
        <Route path="/signin" component={SignInForm} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/requestPassword" component={PasswordResetRequestForm} />
        <Route path="/forgot/:authString" component={PasswordResetForm} /> 
        <Route exact path="/" component={Home} />
        <Route 
          path={["/user/:id", "/admin/"]} 
          render={(routeProps) => (
            <ProtectedRoutes {...routeProps} {...{authToken}} />
          )}  
        />
        <Route component={PageNotFound} />
      </Switch>
    )
  }
}

export default Routes;
