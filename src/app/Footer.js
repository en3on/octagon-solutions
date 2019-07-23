import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Footer.css';


class Footer extends Component {
  render() {
    return (
      <Navbar className="bg-dark justify-content-between py-3 margin-content-3">
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <span className="off-colour">&copy; 2019 Octogon Solutions</span>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;