// Contact Form for clients to contact the administrator.
// The contact form requests First Name, Last Name & Email, message

import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './ContactForm.css'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  handleFormChange(e) {
    const {target} = e;

    this.setState({
      [target.name]: target.value,
    });
  }

  resetForm(e) {
    e.preventDefault();

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      messsage: '',
    })
  }

  render() {
    return (
      <div className="form-component-container">
        <h1>Contact Us!</h1>
        <div className="form-container">
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstName" onChange={this.handleFormChange}></Form.Control>
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" onChange={this.handleFormChange}></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" onChange={this.handleFormChange}></Form.Control>
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" name="message" onChange={this.handleFormChange}></Form.Control>
          </Form.Group>
          <Button variant="primary" id="contactSubmitButton" type="submit" onClick={this.submitHandler}>
            Submit
          </Button>
        </Form>
        </div>
      </div>
    )
  }
} 

export default ContactForm;