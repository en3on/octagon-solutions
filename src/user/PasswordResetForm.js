import React, {Component} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import './RegisterForm.css';


class PasswordResetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitHandler = this.submitHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.passwordValidator = this.passwordValidator.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
  }

  handleFormChange(e) {
    const {currentTarget} = e;
    this.setState({
      [currentTarget.name]: currentTarget.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const passChange = prevState.newPassword !== this.state.newPassword;
    const confPassChange =  prevState.confirmPassword !== this.state.confirmPassword;

    (passChange || confPassChange) && this.passwordValidator();
  }

  passwordValidator() {
    this.setState({
      errorMessage: this.state.newPassword === this.state.confirmPassword ? '' : 'Your password does not match'
    });
  }

  render() {
    return (
        <div className="form-component-container">
          <Form className="register-form" onSubmit={this.submitHandler}>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password:</Form.Label>
              <Form.Control type="password" name="newPassword" onChange={this.handleFormChange} required />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control type="password" name="confirmPassword" onChange={this.handleFormChange} required />
            </Form.Group>
            {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
            <Button variant="primary" id="passwordResetSubmitButton" type="submit" onClick={this.submitHandler}>
              Reset Password
            </Button>
          </Form>
        </div>
    )
  }
}

export default PasswordResetForm;