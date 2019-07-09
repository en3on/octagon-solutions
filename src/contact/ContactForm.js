// Contact Form for clients to contact the administrator.
// The contact form requests First Name, Last Name & Email, message

import React from 'react';

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
        <form onSubmit={this.submitHandler}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" value={this.state.firstName} onChange={this.handleFormChange}/>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" value={this.state.lastName} onChange={this.handleFormChange} />
          <label htmlFor="Email">Email</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleFormChange}/>
          <label htmlFor="last-name">Message</label>
          <textarea name="message" value={this.state.message} onChange={this.handleFormChange} cols="30" rows="10" />
          <input type="submit" onClick={this.submitHandler} value="Submit"/>
        </form>
      </div>
    )
  }
} 

export default ContactForm;