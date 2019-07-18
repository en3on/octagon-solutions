import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.props.location.state,
      authToken: localStorage.getItem('loginToken'),
    };
  }

  render() {
    if (!this.state.isAuthenticated && this.state.authToken !== null) {
      return (
      <Redirect to="/signin" />
      )
    } else {
      return (
        <div>
          User UserDashBoard page!
        </div>
      )
    } 
  }
}



export default UserDashboard;