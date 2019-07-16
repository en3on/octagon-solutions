// Sign Up Form allows anyone to sign up for an account to access their personal dashboards
// The contact form requests First Name, Last Name, Email, Password & Confirm Password.
// The sign up form then redirects the user to their personal dashboards

import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import "./RegisterForm.css";


class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {authenticated: false};

    this.submitHandler = this.submitHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.passwordValidator = this.passwordValidator.bind(this);
    this.register = this.register.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.confirmPassword !== this.state.confirmPassword) this.passwordValidator();
  }

  passwordValidator() {
    this.setState({
        errorMessage: this.state.password === this.state.confirmPassword ? '' : 'Your password does not match'
      })
  }
  
  submitHandler(e) {
    e.preventDefault();
    this.register(this.state);
  }

  async register(payload) {
    try {
      const response = await axios.post('http://localhost:5000/auth/register', payload);
      const token = response.data.token;

      localStorage.setItem('token', token);

      this.setState({
        authenticated: true,
      });

    } catch(exception) { 
      this.setState({
        authenticated: false,
        error: exception,
      });
    };
  }

  handleFormChange(e) {
    const {currentTarget} = e;
    this.setState({
      [currentTarget.name]: currentTarget.value,
    });
  }

  render() {
    return (
      <div className="form-component-container">
        <Form className="register-form" onSubmit={this.submitHandler}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstName" onChange={this.handleFormChange} required />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" onChange={this.handleFormChange} required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={this.handleFormChange} required />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={this.handleFormChange} required />
          </Form.Group>
         
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="confirmPassword" onChange={this.handleFormChange} required />
            <div>{this.state.errorMessage || null}</div>
          </Form.Group>

          <Button variant="primary" id="registerSubmitButton" type="submit" onClick={this.submitHandler}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
} 

export default RegisterForm;