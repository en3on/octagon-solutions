import React, {Component} from 'react';
import {Form, Alert, Button} from 'react-bootstrap';
import './RegisterForm.css';

class PasswordResetRequestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleFormChange(e) {
    return;
  }

  submitHandler(e) {
    return;
  }

  render() {
    return (
      <div className="form-component-container">
        <Form className="register-form">
          <Form.Group controlId="emailAddress">
            <Form.Label>Your Current Email Address:</Form.Label>
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

export default PasswordResetRequestForm;
