import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
import axios from 'axios';
import './UserEditPage.css';
import RegisterForm from './RegisterForm';

class UserEditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {authenticated: false, errorResponse: {}};

    this.editDetailsHandler = this.editDetailsHandler.bind(this);
  }

  async editDetailsHandler(payload) {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + '/auth/register', payload);
      const {status: responseStatus} = response;
      const {message : responseMessage, token} = response.data;

      localStorage.setItem('token', token);

      this.setState({
        authenticated: true,
        responseMessage,
        responseStatus,
        requirements: '',
      });

    } catch(exception) {
      const {message : responseMessage, requirements} = exception.response.data.error;
      this.setState({
        responseMessage,
        requirements
      })
    }; 
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
        firstName="David" 
        lastName="Peterson" 
        email="david.peterson@gmail.com" 
        />        
      </div>
    );
  };
}

export default UserEditPage;