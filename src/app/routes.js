import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../landing/Home';
import AboutPage from '../about/AboutPage';
import SignInForm from '../user/SignInForm';
import ContactForm from '../contact/ContactForm';
import RegisterPage from '../user/RegisterPage';
import PageNotFound from './PageNotFound';
import ProtectedRoutes from './ProtectedRoutes';


class Routes extends Component {

  render() {
    const {authToken} = this.props;
    return (
      <Switch>
        <Route path="/signin" component={SignInForm} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactForm} />
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
