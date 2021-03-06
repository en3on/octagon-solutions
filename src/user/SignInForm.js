// The Sign In form allows users (incl. admins) to securely sign into their dashboards
// The Sign In requests their Email and Password

import React from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Footer from '../app/Footer';
import './SignInForm.css';
import './MainContentStyles.css';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {authenticated: false, errorResponse: {}};

    this.submitHandler = this.submitHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    if(this.props.location.state) {
      const {arriveForgotPage} = this.props.location.state;
      this.setState({arriveForgotPage})
    }
  }

  submitHandler(e) {
    e.preventDefault();
    const data = {
      'email': this.state.email,
      'password': this.state.password,
    };
    this.setState({inSubmit: true})
    this.login(data);
  }

  async login(payload) {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/login', payload);
      console.log(response.data);
      const {token, message} = response.data;
      const {_id : id, firstName, lastName, email} = response.data.user;
      // create global state values, almost similar to a redux store
      localStorage.setItem('loginToken', token);
      localStorage.setItem('id', id);
      localStorage.setItem('email', email)
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);

      this.setState({
        authenticated: true,
        successMessage: message,
        errorResponse: '',
      });

    } catch(exception) {
      this.setState({
        errorResponse: exception.response.data.error,
        inSubmit: false,
      });
    };
  }

  handleFormChange(e) {
    const {target} = e;

    this.setState({
      [target.name]: target.value,
    });
  }


  render() {
    if(this.state.authenticated) {
      return (
        <Redirect
        to={{
          pathname: "/",
          state: { isAuthenticated: true }
        }}
        />
      )
    };
      return (
        <>
        <div className="centered-content">
          <h1 className="text-center">Sign In to Your Account</h1>
          <div className="content-container signin-form-component-container">
            <Form className="outer-form" onSubmit={this.submitHandler}>
              {this.state.arriveForgotPage !== undefined && <Alert variant="success"> Password successfully reset. Please login.</Alert>}
              {(this.state.errorResponse.message || this.state.authenticated) && 
              <Alert variant={`${this.state.authenticated || this.state.inSubmit ? "success" : "danger"}`}>
                {this.state.inSubmit && 'Logging in'}
                {this.state.errorResponse.message}
                {this.state.successMessage}
              </Alert>}
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" onChange={this.handleFormChange} />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={this.handleFormChange} />
              </Form.Group>
              <Button variant="primary" id="signInSubmitButton" type="submit" onClick={this.submitHandler}>
                Login
              </Button>
            </Form>
            <div className="link-container">
              <Link to="/requestPassword">Forgot Password?</Link>
            </div>
          </div>
        </div>
        <Footer />
        </>
      )
  }
} 

export default SignInForm;