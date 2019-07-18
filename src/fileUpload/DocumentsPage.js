import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class DocumentsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.props.location.state,
      authToken: localStorage.getItem('loginToken'),
    };
  }

  render() {
    if (!this.state.isAuthenticated && this.state.authToken !== null) {
      return (
        <Redirect to="/signin" />
      )
    } else {
      return (
        <div>
          DocumentsPage
        </div>
      )
    } 
  }
}



export default DocumentsPage;