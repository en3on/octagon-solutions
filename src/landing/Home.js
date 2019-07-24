import React, {Component} from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <h1>Welcome to Octogon Accounting Solutions!</h1>
        <p>Octagon Bookkeeping Solutions is a professional organisation that provides comprehensive bookkeeping and administrative services for small businesses.</p>
        <p><Button variant="primary"><Link to="/about">About Us!</Link></Button></p>
      </Jumbotron>
      </div>
    )
  }
}

export default Home;