import React from 'react';
import {Link} from 'react-router-dom';

function PageNotFound(props) {
  return (
    <div>
    <h1>The Requested Page cannot be found</h1>
    <Link to="/">Return back home</Link>
    </div>
  );
}

export default PageNotFound;