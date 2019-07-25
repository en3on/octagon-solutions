import React, {Component} from 'react';
import {Form, Button, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import './AdminDashboard.css';

class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({email: e.currentTarget.value});
  }

  async handleSubmit(e) {
    e.preventDefault();

    const response = await axios.get(process.env.REACT_APP_API_URL + `/documents/user/${this.state.email}`,
      {
        headers: {
          token: localStorage.getItem('loginToken'),
        },
      });

    this.setState({
      documents: response.data.documents,
    });

    console.log(this.state);
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Control type="email" placeholder="Search for user by email" onChange={this.handleChange} />
          </Form.Group>
          <Button type="submit" onClick={this.handleSubmit} variant="primary">Search</Button>
        </Form>
        <ListGroup>
          {this.state.documents.map((document, idx) => (
            <a href={document.url}><ListGroup.Item className="listGroupItem" key={idx}>File {idx + 1}</ListGroup.Item></a>
          ))}
        </ListGroup>
      </>
    );
  }
}

export default AdminDashboard;
