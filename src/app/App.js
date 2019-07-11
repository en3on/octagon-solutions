import React from 'react';
import './App.css';
import ContactForm from '../contact/ContactForm';
import SignInForm from '../user/SignInForm';
import SignUpForm from '../user/SignUpForm';

class App extends React.Component {
  render() {
    return (
    <div>
      <SignUpForm />
    </div>
    );
  };
}

export default App;
