// The Booking Form allows clients that have purchased packages to book a time with the accountant
// The Booking form requests a booking time and a description of the booking

import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './BookingForm.css'

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    // assuming that the value of the available booking times are structured in an array format
    // retrieved from the API (i.e: ['Monday at 4:00PM', 'Tuesday at 3:00PM'])
    this.state = {
      availableTimes: ['Monday at 4:00PM', 'Tuesday at 3:00PM', 'Thursday at 3:00PM'], 
      selectedTime: '',
    };  

    this.submitHandler = this.submitHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state.selectedTime);
    console.log(this.state.message);
  }

  handleFormChange(e) {
    const {target} = e;

    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    return (
      <div className="form-component-container">
        <Form className="booking-form" onSubmit={this.submitHandler}>
          <Form.Group controlId="formBookingTime">
            <Form.Label>Available Times to Book:</Form.Label>
            <Form.Control as="select" name="selectedTime" value={this.state.selectedTime} onChange={this.handleFormChange}>
              {this.state.availableTimes.map((avaliableTime, idx) => {
                return (
                <option key={idx} value={avaliableTime}>{avaliableTime}</option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Further Description (any further questions or comments):</Form.Label>
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