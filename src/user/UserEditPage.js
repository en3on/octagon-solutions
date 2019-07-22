// The User Edit Page is the page where the user edits their current details on file
// It imports all the current styles and adds the register form component (which is reusable for the edit page)
// it handles the logic of posting from the front-end to the back-end and receives responses
// which are displayed onto the screen.

import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
// eslint-disable-next-line
import axios from 'axios';
import './UserEditPage.css';
import RegisterForm from './RegisterForm';

class UserEditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {authenticated: false, errorResponse: {}};

    this.editDetailsHandler = this.editDetailsHandler.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this);
  }

  async editDetailsHandler(payload) {
    // Method to post data
  }

  async fetchDetails() {
    // Method to fetch details of the user
  }

  render() {
    return (
      <div className="form-component-container">
        {this.state.responseMessage && 
        <Alert variant={this.state.responseStatus === 201 ? "success" : "danger"} className="alertStyle">
          {this.state.responseMessage}
          {this.state.requirements && 
            this.state.requirements.map((requirement, idx) => <li key={idx}>{requirement}</li>)}
        </Alert>}
        <RegisterForm 
        onSubmission={this.editDetailsHandler} 
        firstName="" 
        lastName="" 
        email=""
        submitButton="Edit Details" 
        />
      </div>
    );
  };
}

export default UserEditPage;