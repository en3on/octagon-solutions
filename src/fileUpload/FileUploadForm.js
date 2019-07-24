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
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.descriptionChecker = this.descriptionChecker.bind(this);
    this.formDataHandler = this.formDataHandler.bind(this);
    this.fileUploader = this.fileUploader.bind(this);
  }

  handleUploadFormChange(e) {
    console.log({e});
    this.setState({
      files: [...this.state.files, {file: e.target.files[0], description: ''}],
      filenames: [...this.state.filenames, e.target.files[0].name],
      errorMessage: '',
    });
    console.log(this.state);
    e.target.value = '';
  }

  handleDescriptionChange(e) {
    const files = this.state.files.slice();
    files[e.target.name].description = e.target.value;
    this.setState({
      files,
      errorMessage: '',
    });
  }

  descriptionChecker(ary) {
    for(let e = 0; e < ary.length; e++) {
      if(ary[e].description === '') {
        return false;
      }
    }
    return true;
  }

  submitHandler(e) {
    e.preventDefault();
    if(this.state.files.length !== 0 && this.descriptionChecker(this.state.files)) {
      console.log('submitted');
      this.setState({inSumbit: true});
    } else {
      this.setState({errorMessage: "Please upload your files and enter a description"});
      console.log('not submitted');
      return
    };
    const filesAry = this.state.files;
    this.formDataHandler(filesAry);
  }

  formDataHandler(filesAry) {
    this.fileUploader(filesAry);
  }

  async fileUploader(payload) {
    console.log({payload});
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
        <div id="fie-uploading">
          {this.state.inSumbit && <Alert variant="success">Uploading Files. Please Wait.</Alert>}
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
          {this.state.files.map(({file}, idx) => {
            return (
              <ListGroup key={file.name}>
                <ListGroup.Item className="itemUpload" variant="dark" key={file.name}>{file.name}</ListGroup.Item>
                <Form.Group className="my-2" controlId="formDescription">
                  <Form.Label>{`Provide a Description of ${file.name}:`}</Form.Label>
                  <Form.Control as="textarea" rows="3" onChange={this.handleDescriptionChange} name={idx} />
                </Form.Group>
              </ListGroup>
            );
          })}
          <Button variant="primary" id="fileSubmitButton" type="submit" onClick={this.submitHandler} disabled={this.state.inSumbit}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
} 

export default FileUpload;