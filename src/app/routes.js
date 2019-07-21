import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../landing/Home';
import SignInPage from '../user/SignInPage';
import RegisterPage from '../user/RegisterPage';
import PageNotFound from './PageNotFound';
import ProtectedRoutes from './ProtectedRoutes';


class Routes extends Component {

  render() {
    const {authToken} = this.props;
    return (
      <Switch>
        <Route path="/signin" component={SignInPage} />
        <Route path="/register" component={RegisterPage} />
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
