import React, {Component} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import './RegisterForm.css';


class PasswordResetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitHandler = this.submitHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  submitHandler(e) {

  }

  handleFormChange(e) {

  }

  render() {
    return (
        <div className="form-component-container">
          <Form className="register-form" onSubmit={this.submitHandler}>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password:</Form.Label>
              <Form.Control type="text" name="newPassword" onChange={this.handleFormChange} required />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control type="text" name="confirmPassword" onChange={this.handleFormChange} required />
            </Form.Group>
            <Button variant="primary" id="passwordResetSubmitButton" type="submit" onClick={this.submitHandler}>
              Reset Password
            </Button>
          </Form>
        </div>
    )
  }
}

export default PasswordResetForm;