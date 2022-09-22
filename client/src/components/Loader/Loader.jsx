import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div style={{ width: '100%', height: '100px' }}>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </div>
  );
}

export default Loader;
