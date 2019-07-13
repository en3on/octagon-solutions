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
      description: '',
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

  onFileAdd(e) {
    e.preventDefault();
    document.querySelector('#fileUploader').value = '';
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
          <Form.Group controlId="formFilesAddedLabel">
            <Form.Label>Your added files:</Form.Label>
          </Form.Group>
          {console.log(this.state.files)}
          {this.state.files.map(file => {
            return (
              <ListGroup>
                <ListGroup.Item variant="dark" key={file.name}>{file.name}</ListGroup.Item>
              </ListGroup>
            );
          })}
          <Form.Group controlId="formDescription">
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