import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
          alt=""
          src="" // insert image here
          width="30"
          height="30"
          className="d-inline-block align-top"
          />
          {' Octagon Solutions'}
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            {!(this.props.isAuthenticated) && <Nav.Link href="/signin">Sign In</Nav.Link>}
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            {this.props.isAuthenticated &&
            <Nav.Link href="/">My Account</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar;  