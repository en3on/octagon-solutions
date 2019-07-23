import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
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
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>My Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar;  