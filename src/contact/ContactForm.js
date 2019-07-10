// Contact Form for clients to contact the administrator.
// The contact form requests First Name, Last Name & Email, message

import React from 'react';
import {Form, Button} from 'react-bootstrap';

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
      <div>
        <h1>Contact Us!</h1>
        <Form onSubmit={this.submitHandler}>
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
          {/* <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleFormChange}/>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleFormChange} />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleFormChange}/>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" value={this.state.message} onChange={this.handleFormChange} cols="30" rows="10" />
          <input type="submit" id="submitButton" onClick={this.submitHandler} value="Submit"/>
          </div> */}
        </Form>
      </div>
    )
  }
} 

export default ContactForm;