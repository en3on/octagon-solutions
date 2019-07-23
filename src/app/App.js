import React, {Component} from 'react';
import './App.css';
import Routes from './Routes';
import NavigationBar from './NavigationBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {auth: localStorage.getItem('loginToken')}
  }
  render() {
    const {auth} = this.state;
    return (
      <div>
        <NavigationBar />
        <Routes authToken={auth} />
      </div>
    );
  };
}

export default App;