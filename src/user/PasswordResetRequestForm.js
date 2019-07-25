import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Button, Alert} from 'react-bootstrap';
import './UserFormStyles.css';

class PasswordResetRequestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
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
    const data = {'email': this.state.email};
    this.setState({inSubmission: true})
    this.resetPassword(data);
  }

  async resetPassword(payload) {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/forgot', payload)
      const {status : responseStatus} = response;
      
      this.setState({
        responseStatus,
        responseMessage: '',
        submitted: true,
      });

    } catch(exception) {
      const{message : responseMessage} = exception.response.data.error;
      this.setState({
        responseMessage,
        inSubmission: false,
      })
    }
  }

  render() {
    if(this.state.submitted) {
      return (
        <div className="form-component-container">
          <div className="outer-form">
            <Alert className="text-centered" variant="success">
              Thanks! <br /> Please check your email for instructions on how to create a new password.
              <div className="link-container">
                <Link to="/">Return To Home</Link>
              </div>
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
            <Button variant="primary" id="passwordResetRequestButton" type="submit" disabled={this.state.inSubmission} onClick={this.submitHandler}>
              Reset Password
            </Button>
          </Form>
        </div>
      )
    }
  }
}

export default PasswordResetRequestForm;
