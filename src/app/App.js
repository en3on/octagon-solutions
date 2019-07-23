import React, {Component} from 'react';
import './App.css';
import Routes from './Routes';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {auth: localStorage.getItem('loginToken')}
  }
  render() {
    const {auth} = this.state;
    return (
      <div>
        <Routes authToken={auth} />
        <Footer />
      </div>
    );
  };
}

export default App;