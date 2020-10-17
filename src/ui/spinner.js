import React from 'react';
import {Spinner} from "react-bootstrap";

function SpinnerLoading() {
  return(
    <div className={'App'}>
      <div className='loaderBlock'>
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  )
}

export default SpinnerLoading;