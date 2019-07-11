import React, {Component} from 'react';
import './App.css';
import Routes from './Routes'
import ContactForm from '../contact/ContactForm';
import SignInForm from '../user/SignInForm';
import RegisterForm from '../user/RegisterForm';

class App extends Component {
  render() {
    return (
    <div>
      <Routes />
    </div>
    );
  };
}

export default App;
