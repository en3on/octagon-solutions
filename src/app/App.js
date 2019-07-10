import React from 'react';
import './App.css';
import ContactForm from '../contact/ContactForm'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
    <div>
      <ContactForm />
    </div>
    );
  };
}

export default App;
