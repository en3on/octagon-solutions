import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import './PackageCard.css';

class PackageCard extends Component {
  render() {
    return (
      <Card className="package-card">
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          {this.props.text}
          </Card.Text>
          <Card.Text>
            Price: ${this.props.price}
          </Card.Text>
          <Button variant="primary">Contact</Button>
      </Card.Body>
      </Card>
    );
  };
}

export default PackageCard;
