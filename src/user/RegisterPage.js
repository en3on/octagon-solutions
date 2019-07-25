// The Register Page is the page where people register for the site
// It imports all the current styles and adds the register form component (which is completely modular)
// it handles the logic of posting from the front-end to the back-end and receives responses
// which are displayed onto the screen.

import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';
import RegisterForm from './RegisterForm';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {authenticated: false, errorResponse: {}};

    this.register = this.register.bind(this);
  }

  async register(payload) {
    const {email : emailLogin, password} = payload
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/register', payload);
      const {status: responseStatus} = response;
      const {message : responseMessage, token} = response.data;
      const {firstName, lastName, email} = response.data.user;
      // create global state values, almost similar to a redux store
      localStorage.setItem('loginToken', token);
      localStorage.setItem('email', email)
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);

      try {
        const innerLoginRequestData = {
          'email': emailLogin,
          'password': password,
        }
        const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/login', innerLoginRequestData);
        const {_id : id} = response.data.user;
        localStorage.setItem('id', id);

      } catch(innerException) {
        console.log(innerException);
      }

      this.setState({
        authenticated: true,
        responseMessage,
        responseStatus,
        requirements: '',
      });

    } catch(exception) {
      const {message : responseMessage, requirements} = exception.response.data.error;
      this.setState({
        responseMessage,
        requirements,
      })
    }; 
  }

  render() {
    if(this.state.authenticated) {
      return (
        <Redirect to='/' />
      );
    };
    return (
      <div className="form-component-container">
        {this.state.responseMessage && 
        <Alert variant={this.state.responseStatus === 201 ? "success" : "danger"} className="alertStyle">
          {this.state.responseMessage}
          {this.state.requirements && 
            this.state.requirements.map((requirement, idx) => <li key={idx}>{requirement}</li>)}
        </Alert>}
        <RegisterForm 
        onSubmission={this.register} 
        submitButton="Register" 
        />
      </div>
    );
  };
}

export default RegisterPage;