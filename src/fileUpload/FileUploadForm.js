// File Upload for clients to file the administrator.
// The File Upload requests First Name, Last Name & Email & message

import React from 'react';
import {Form, Button} from 'react-bootstrap';
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
    this.onFileAdd = this.onUpload.bind(this);
    this.onFormSubmission = this.onFormSubmission.bind(this);
  }

  handleUploadFormChange(e) {
    this.setState({
      file: [...this.state.files, e.target.files[0]],
      filename: e.target.files[0].name,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    // post data into db
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
        <Form className="file-upload-form" onSubmit={this.submitHandler}>
          <Form.Group controlId="formFileUpload">
            <Form.Label>Upload Your Files</Form.Label>
            <Form.Control type="file" /> 
          </Form.Group>
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