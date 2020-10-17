import React, {useState} from 'react';
import './App.css';
import WeatherDisplay from "./weatherDisplay";
import {Spinner} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [isLocationError, setLocationError] = useState(false);

  function currentLocation(location) {
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
    setLoading(false);
  }

  function locationError() {
    setLocationError(true);
  }

  navigator.geolocation.getCurrentPosition(currentLocation, locationError);

  if (isLocationError) {
    return(
      <div>Не удалось определить местоположение</div>
    )
  }

 if (isLoading) {
   return(
     <div className={'App'}>
       <div className='loaderBlock'>
         <Spinner animation="border" variant="primary" />
       </div>
     </div>
   )
 }

   return (
     <div className={'App'}>
       <WeatherDisplay
         latitude = {latitude}
         longitude = {longitude}
       />
     </div>
   );
}

export default App;
