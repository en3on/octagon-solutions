import React from 'react';
import {Alert} from 'react-bootstrap';
import "./SignInForm.css";
import axios from 'axios';

class UserEditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {authenticated: false, errorResponse: {}};

    this.register = this.register.bind(this);
  }

  login(payload) {

  }

  render() {
    return (
      <div className="form-component-container">
        {(this.state.errorResponse.message || this.state.authenticated) && 
        <Alert variant={`${this.state.authenticated ? "success" : "danger"}`}>
          {this.state.errorResponse.message}
          {this.state.successMessage}
        </Alert>}  
        
      </div>
    );
  };
}

export default UserEditPage;