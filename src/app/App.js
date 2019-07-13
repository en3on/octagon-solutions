import React, {Component} from 'react';
import './App.css';
import ContactForm from '../contact/ContactForm';
import SignInForm from '../user/SignInForm';
import RegisterForm from '../user/RegisterForm';
import FileUpload from '../fileUpload/FileUploadForm';

class App extends Component {
  render() {
    return (
    <div>
      <FileUpload />
    </div>
    );
  };
}

export default App;
