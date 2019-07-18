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
    this.handleUploadFormChange = this.handleUploadFormChange.bind(this); 
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleUploadFormChange(e) {
    this.setState({
      files: [...this.state.files, {file: e.target.files[0], description: ''}],
      filenames: [...this.state.filenames, e.target.files[0].name],
    });
    e.target.value = '';
  }

  handleDescriptionChange(e) {
    const files = this.state.files.slice();
    files[e.target.name].description = e.target.value;
    this.setState({files});
  }

  submitHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="form-component-container">
        <Form className="file-upload-form">
          <Form.Group controlId="fileUploader">
            <Form.Label>Upload Your Files</Form.Label>
            <Form.Control type="file" onChange={this.handleUploadFormChange} /> 
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
          <Button variant="primary" id="fileSubmitButton" type="submit" onClick={this.submitHandler}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
} 

export default FileUpload;