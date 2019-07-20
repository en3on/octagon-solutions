import React, {Component} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import './RegisterForm.css';

class PasswordResetRequestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleFormChange(e) {
    const {currentTarget} = e;
    this.setState({
      [currentTarget.name]: currentTarget.value,
    })
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    if(this.state.submitted) {
      return (
        <div className="form-component-container">
          <div className="register-form">
            <Alert variant="success">
              Thanks! Please check your email for instructions on how to create a new password.
            </Alert>
          </div>
        </div>
      )
    } else {
      return (
        <div className="form-component-container">
          <Form className="register-form">
            <Form.Group controlId="emailAddress">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control type="email" name="email" onChange={this.handleFormChange} required />
            </Form.Group>
            <Button variant="primary" id="passwordResetRequestButton" type="submit" onClick={this.submitHandler}>
              Reset Password
            </Button>
          </Form>
        </div>
      )
    }
  }
}

export default PasswordResetRequestForm;
