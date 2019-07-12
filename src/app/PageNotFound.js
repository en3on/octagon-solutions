import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function PageNotFound(props) {
  const {pathname} = props.location;
  return (
    <div>
    <h1>The Requested Page cannot be found</h1>
    <h1>Return back home</h1>
    </div>
  )
}

export default PageNotFound;