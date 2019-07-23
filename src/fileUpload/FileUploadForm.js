// File Upload for clients to file the administrator.
// The File Upload requests First Name, Last Name & Email & message

import React, {Component} from 'react';
import {Form, Button, ListGroup, Alert} from 'react-bootstrap';
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
    this.setState({
      files: [...this.state.files, {file: e.target.files[0], description: ''}],
      filenames: [...this.state.filenames, e.target.files[0].name],
      errorMessage: '',
    });
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
    };
    const filesAry = this.state.files;
    this.formDataHandler(filesAry);
  }

  formDataHandler(filesAry) {
    const formDataAry = [];
    filesAry.forEach(() => formDataAry.push(new FormData()));
    formDataAry.forEach((formDataObj) => {
      filesAry.forEach((fileObj) => {
        formDataObj.append('file', fileObj.file)
        formDataObj.append('description', fileObj.description)
        console.log('added')
      })
    })
    console.log(formDataAry[0].get('file'));
    console.log(formDataAry[0].get('description'));
    // payload.forEach((fileObj) => {
    //   formData.append('file', fileObj.file)
    //   formData.append('description', fileObj.description)
    //   formDataAry.push(formData)
    // });
    // console.log(formDataAry);
  }

  fileUploader(payload) {
    return;
  }

  render() {
    return (
      <div className="form-component-container">
        <Form className="file-upload-form">
        <div id="fileNotFound">
          {this.state.errorMessage && <Alert variant="danger">Please upload your files and enter a description</Alert>}
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