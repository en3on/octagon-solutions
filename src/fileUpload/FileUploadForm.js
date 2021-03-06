// File Upload for clients to file the administrator.
// The File Upload requests First Name, Last Name & Email & message

import React, {Component} from 'react';
import {Form, Button, ListGroup, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Footer from '../app/Footer';
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
    const formData = new FormData();
    filesAry.forEach((file) => {
      formData.append('documents', file)
    })
    console.log(formData.getAll('documents'));
    this.fileUploader(formData);
  }


  async fileUploader(payload) {
    console.log(payload);

    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + '/documents/upload', payload, {
        headers: {
          token: localStorage.getItem('loginToken'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const {status: responseStatus} = response; 

      this.setState({
        responseStatus,
        inSubmit: false,
      });
      console.log('succeeded', responseStatus);

    } catch(exception) {
        const {message : errorMessage} = exception.response.data.error;
        this.setState({
          errorMessage,
          inSubmit: false,
        });
        console.log('failed', errorMessage);
    }
  }

  render() {
    if(this.state.responseStatus === 201) {
      return (
        <Redirect to={`/user/${localStorage.getItem('id')}`} />
      )
    };
    return (
      <>
      <div className="centered-content">
        <h1 className="text-center">Upload Your Files To The Accountant</h1>
        <div className="content-container upload-form-component-container">
          <Form>
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
            <Button className="my-2" variant="primary" size="lg" id="fileSubmitButton" type="submit" onClick={this.submitHandler} disabled={this.state.insubmit} block>
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
      </>
    )
  }
} 

export default FileUpload;
