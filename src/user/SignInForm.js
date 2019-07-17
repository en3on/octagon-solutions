// The Sign In form allows users (incl. admins) to securely sign into their dashboards
// The Sign In requests their Email and Password

import React from 'react';
import {Form, Button} from 'react-bootstrap';
import "./SignInForm.css";
import axios from 'axios';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.login = this.login.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    const data = {
      'email': this.state.email,
      'password': this.state.password,
    };
    this.login(data);
  }

  async login(payload) {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', payload);
      const token = response.data.token;

      localStorage.setItem('loginToken', token);
      
      // add a redirect route

    } catch(exception) {
      this.setState({
        errorResponse: exception.response.data.error,
      });
    };
  }

  handleFormChange(e) {
    const {target} = e;

    this.setState({
      [target.name]: target.value,
    });
  }

  // special reset method that resets the entire state for user convenience
  resetForm() {
    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
      return (
        <div className="form-component-container">
          <Form className="sign-in-form" onSubmit={this.submitHandler}>
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
            <Button className="mx-2" variant="secondary" id="reset-button" type="reset" onClick={this.resetForm}>
              Reset
            </Button>
          </Form>
        </div>
      )
  }
} 

export default SignInForm;