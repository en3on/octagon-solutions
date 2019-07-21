import React, {Component} from 'react';
import './App.css';
import RegisterPage from '../user/RegisterPage';
import UserEditPage from '../user/UserEditPage';


class App extends Component {
  render() {
    return (
    <div>
      <RegisterPage />
    </div>
    );
  };
}

export default App;
