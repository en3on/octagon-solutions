import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import './UserFormStyles.css';

class PasswordResetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitHandler = this.submitHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.passwordValidator = this.passwordValidator.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    const {authString} = this.props.match.params; 
    const data = {
      'authString': authString,
      'newPassword': this.state.newPassword,
    };
    this.resetPassword(data);
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

  async resetPassword(payload) {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/passwordChange', payload);
      const {status: responseStatus} = response;

      this.setState({
        responseStatus,
      });

    } catch(exception) {
      const {message : responseMessage} = exception.response.data.error;
    
      this.setState({
        responseMessage,
      });
    };
  }

  render() {
    if(this.state.responseStatus === 201) {
      return (
        <Redirect
        to={{
          pathname: "/signin",
          state: { arriveForgotPage: true }
        }}
        />
      )
    }
    return (
        <div className="form-component-container">
          <Form className="outer-form" onSubmit={this.submitHandler}>
            {this.state.responseMessage && 
            <Alert variant="danger">
                {this.state.responseMessage}
            </Alert>}
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