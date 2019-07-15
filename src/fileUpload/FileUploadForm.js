// File Upload for clients to file the administrator.
// The File Upload requests First Name, Last Name & Email & message

import React from 'react';
import {Form, Button, ListGroup} from 'react-bootstrap';
import './FileUpload.css';


class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      filenames: [],
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleUploadFormChange = this.handleUploadFormChange.bind(this); 
    this.onFileAdd = this.onFileAdd.bind(this);
  }

  handleUploadFormChange(e) {
    this.setState({
      files: [...this.state.files, e.target.files[0]],
      filenames: [...this.state.filenames, e.target.files[0].name],
    });
    e.target.value = '';
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state.files);
  }

  handleFormChange(e) {
    const {target} = e;

    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    return (
      <div className="form-component-container">
        <Form className="file-upload-form">
          <Form.Group controlId="formFileUpload">
            <Form.Label>Upload Your Files</Form.Label>
            <Form.Control type="file" id="fileUploader" onChange={this.handleUploadFormChange} /> 
          </Form.Group>
          <div id="uploadedFilesLabel">
            <span>Your Uploaded Files:</span>
          </div>
          {this.state.files.map(file => {
            return (
              <ListGroup key={file.name}>
                <ListGroup.Item className="itemUpload" variant="dark" key={file.name}>{file.name}</ListGroup.Item>
              </ListGroup>
            );
          })}
          <Form.Group classname="my-2" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="5" name="description" onChange={this.handleFormChange} />
          </Form.Group>
          <Button variant="primary" id="fileSubmitButton" type="submit" onClick={this.submitHandler}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
} 

export default FileUpload;