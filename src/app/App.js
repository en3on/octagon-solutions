import React, {Component} from 'react';
import './App.css';
<<<<<<< HEAD
import FileUploadForm from '../fileUpload/FileUploadForm';

=======
import Routes from './Routes';
import Footer from './Footer';
import NavigationBar from './NavigationBar';
>>>>>>> master

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
<<<<<<< HEAD
    <div>
      <FileUploadForm />
    </div>
=======
      <div>
        <NavigationBar isAuthenticated={this.state.isAuthenticated} />
        <Routes authToken={auth} />
        <Footer />
      </div>
>>>>>>> master
    );
  };
}

export default App;