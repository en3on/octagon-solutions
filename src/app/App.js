import React from 'react';
import './App.css';
import ContactForm from '../contact/ContactForm'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(payloadData) {
    // insert logic to post to DB as a post req
  }

  render() {
    return (
    <div>
      <ContactForm onSubmit={this.onFormSubmit} />
    </div>
    );
  };
}

export default App;
