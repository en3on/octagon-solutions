import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button, Alert} from 'react-bootstrap';
import './UserFormStyles.css';

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
    if(!this.state.email) {
      this.setState({responseMessage: 'The email field cannot be empty'});
      return
    }
    // insert logic when posting email
    try {

    } catch(exception) {

    }
    // this.setState({
    // responseMessage: '', 
    // submitted: true,
    // });
  }

  render() {
    if(this.state.submitted) {
      return (
        <div className="form-component-container">
          <div className="outer-form">
            <Alert variant="success">
              Thanks! Please check your email for instructions on how to create a new password.
            </Alert>
          </div>
        </div>
      )
    } else {
      return (
        <div className="form-component-container">
          <Form className="outer-form" onSubmit={this.submitHandler}>
          {this.state.responseMessage &&
          <Alert variant="danger">
            {this.state.responseMessage}
          </Alert>}
            <Form.Group controlId="emailAddress">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control type="email" name="email" onChange={this.handleFormChange} required />
            </Form.Group>
            <Button variant="primary" id="passwordResetRequestButton" type="submit" disabled={this.state.submitted} onClick={this.submitHandler}>
              Reset Password
            </Button>
          </Form>
        </div>
      )
    }
  }
}

export default PasswordResetRequestForm;
