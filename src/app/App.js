import React, {Component} from 'react';
import './App.css';
import ContactForm from '../contact/ContactForm';
import SignInForm from '../user/SignInForm';
import RegisterForm from '../user/RegisterForm';
import PackageCard from '../packages/PackageCard';

class App extends Component {
  render() {
    return (
    <div>
      <PackageCard />
    </div>
    );
  };
}

export default App;
