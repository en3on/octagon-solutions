// File Upload for clients to file the administrator.
// The File Upload requests First Name, Last Name & Email & message

import React, {Component} from 'react';
import {Form, Button, ListGroup, Alert} from 'react-bootstrap';
// import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './FileUpload.css';


class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      filenames: [],
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleUploadFormChange = this.handleUploadFormChange.bind(this); 
    this.fileUploader = this.fileUploader.bind(this);
  }

  handleUploadFormChange(e) {
    this.setState({
      files: [...this.state.files, e.target.files[0]],
      filenames: [...this.state.filenames, e.target.files[0].name],
      errorMessage: '',
    });
    e.target.value = '';
  }

  // handleDescriptionChange(e) {
  //   const files = this.state.files.slice();
  //   files[e.target.name].description = e.target.value;
  //   this.setState({
  //     files,
  //     errorMessage: '',
  //   });
  // }

  submitHandler(e) {
    e.preventDefault();
    if(this.state.files.length !== 0) {
      console.log('submitted');
      this.setState({inSubmit: true});
    } else {
      this.setState({errorMessage: "Please upload your files"});
      console.log('not submitted');
      return
    };
    const filesAry = this.state.files;
    const data = {
      files: filesAry
    };
    console.log(data);
    this.fileUploader(data);
  }


  async fileUploader(payload) {
    console.log(payload);
    try {
    //   const response = await axios({
    //     method: 'post',
    //     url: process.env.REACT_APP_API_URL + '/documents/upload',
    //     headers: {
    //     'token': `${localStorage.getItem('loginToken')}`,
    //     'content-type': `application/x-www-form-urlencoded`,
    //     },
    // });
      const response = await axios.post(process.env.REACT_APP_API_URL + '/documents/upload', payload, {
        headers: {
          token: localStorage.getItem('loginToken'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const {status: responseStatus} = response; 

      this.setState({responseStatus});
      console.log('succeeded', responseStatus);

    } catch(exception) {
        const {message : errorMessage} = exception.response.data.error;
        this.setState({errorMessage});
        console.log('failed', errorMessage);
    }
  }

  render() {
    // if(this.state.responseStatus === 201) {
    //   return (
    //     <Redirect to="/user/:id" /> 
    //   )
    // };
    return (
      <div className="form-component-container">
        <Form className="file-upload-form">
        <div id="file-uploading">
          {this.state.inSubmit && <Alert variant="success">Uploading Files. Please Wait.</Alert>}
        </div>  
        <div id="file-not-found">
          {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
        </div>
          <Form.Group controlId="fileUploader">
            <Form.Label>Upload Your Files</Form.Label>
            <Form.Control type="file" onChange={this.handleUploadFormChange} required /> 
          </Form.Group>
          <div id="uploadedFilesLabel">
            <span>Your Uploaded Files:</span>
          </div>
          {this.state.files.map((file) => {
            return (
              <ListGroup key={file.name}>
                <ListGroup.Item className="itemUpload" variant="dark" key={file.name}>{file.name}</ListGroup.Item>
              </ListGroup>
            );
          })}
          <Button className="my-2" variant="primary" id="fileSubmitButton" type="submit" onClick={this.submitHandler} disabled={this.state.insubmit}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
} 

export default FileUpload;