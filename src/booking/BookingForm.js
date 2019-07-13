// The Booking Form allows clients that have purchased packages to book a time with the accountant
// The Booking form requests A Booking Time and a description of the booking

import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './BookingForm.css'

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.submitHandler = this.submitHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    // post data into db
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
        <Form className="booking-form" onSubmit={this.submitHandler}>
          <Form.Group controlId="formBookingTime">
            <Form.Label>Available Times to Book:</Form.Label>
            <Form.Control as="select">
              <option>1:00PM</option>
              <option>2:00PM</option>
              <option>3:00PM</option>
              <option>4:00PM</option>
              <option>5:00PM</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Further Description (Any further questions or comments):</Form.Label>
            <Form.Control as="textarea" rows="5" name="message" onChange={this.handleFormChange} />
          </Form.Group>
          <Button variant="primary" id="BookingSubmitButton" type="submit" onClick={this.submitHandler}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
} 

export default BookingForm;