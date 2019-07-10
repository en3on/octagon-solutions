import React from 'react';
import './App.css';
import ContactForm from '../contact/ContactForm';
import SignInForm from '../user/SignInForm';

class App extends React.Component {
  render() {
    return (
    <div>
      <SignInForm />
    </div>
    );
  };
}

export default App;
