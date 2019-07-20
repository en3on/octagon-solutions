import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
import './RegisterForm.css';
import axios from 'axios';
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
      const token = response.data.token;

      localStorage.setItem('token', token);

      this.setState({
        authenticated: true,
        errorResponse: '',
      });

    } catch(exception) {   
      this.setState({
        errorResponse: exception.response.data.error,
      })
    }; 
  }

  render() {
    return (
      <div className="form-component-container">
        {this.state.errorResponse.message && 
        <Alert variant="danger" className="alertStyle">
          {this.state.errorResponse.message}
          {this.state.errorResponse.requirements && 
            this.state.errorResponse.requirements.map((requirement, idx) => <li key={idx}>{requirement}</li>)}
        </Alert>}
        <RegisterForm onSubmission={this.editDetailsHandler} />        
      </div>
    );
  };
}

export default UserEditPage;