import React, {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import './UserDashboard.css';
import Footer from '../app/Footer';

class UserDashboard extends Component {

  render() {
    return (
      <>
      <div className="userdashboard-container">
        <Card className="welcome-card">
          <Card.Body>
            <h1>Welcome, {`${localStorage.getItem('firstName')}`}!</h1>
            <h2>How can we help you today?</h2>
            </Card.Body>
        </Card>
        <div className="cards-container">
        <Card bg="light" text="black" style={{width: '20rem'}}>
          <Card.Header>Upload Documents to the Accountant</Card.Header>
          <Card.Body>
            <Button variant="primary"><a className="userdash-link" href={this.props.location.pathname + '/documents/upload'}>Upload Documents</a></Button>
          </Card.Body>
        </Card>
        <Card bg="light" text="black" style={{width: '20rem'}}>
          <Card.Header>View Your Documents</Card.Header>
          <Card.Body>
            <Button variant="primary"><a className="userdash-link" href={this.props.location.pathname + '/documents'}>View Documents</a></Button>
          </Card.Body>
        </Card>
        <Card bg="light" text="black" style={{width: '20rem'}}>
          <Card.Header>Edit Your User Profile</Card.Header>
          <Card.Body>
            <Button variant="primary"><a className="userdash-link" href={this.props.location.pathname + '/edit'}>User Profile</a></Button>
          </Card.Body>
        </Card>
        </div>
      </div>
      <Footer />
      </>
    )
  } 
}



export default UserDashboard;