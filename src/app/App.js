import React, {Component} from 'react';
import './App.css';
import Routes from './Routes';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: localStorage.getItem('loginToken'),
      isAuthenticated: false,
    }
  }

  componentDidMount() {
    this.state.auth && this.setState({isAuthenticated: true});
  }

  render() {
    const {auth} = this.state;
    return (
      <div>
        <NavigationBar isAuthenticated={this.state.isAuthenticated} />
        <Routes authToken={auth} />
        {/* <Footer /> */}
      </div>
    );
  };
}

export default App;