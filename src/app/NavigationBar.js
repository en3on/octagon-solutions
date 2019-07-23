import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
          alt=""
          src="https://react-bootstrap.netlify.com/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          />
          {' Octagon Solutions'}
        </Navbar.Brand>
      </Navbar>
    )
  }
}

export default NavigationBar;  