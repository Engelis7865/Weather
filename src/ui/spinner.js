import React from 'react';
import {Spinner} from "react-bootstrap";

export default function SpinnerLoading() {
  return(
    <div className={'App'}>
      <div className='loaderBlock'>
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  )
}