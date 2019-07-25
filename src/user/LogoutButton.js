import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class LogoutButton extends Component {
  constructor(props) {
    super(props);

    this.state = {loggedOut: false};

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault();
    localStorage.removeItem('loginToken');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    this.setState({loggedOut: true})
  }

  render() {
    if(this.state.loggedOut) {
      return(
        <Redirect
        to={{
          pathname: "/",
          state: { loggedOut: true }
        }}
        />
      )
    }
    return (
    <Button variant="primary" onClick={this.onClickHandler}>Log Out</Button>
    )
  }
}

export default LogoutButton;