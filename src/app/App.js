import React, {Component} from 'react';
import './App.css';
import Routes from './Routes';

const User = ({ match }) => console.log(match.params);

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