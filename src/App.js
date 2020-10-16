import React, {useState} from 'react';
import './App.css';
import WeatherDisplay from "./weatherDisplay";
import {Spinner} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [loading, setLoading] = useState(true);

  function currentLocation(location) {
    const latitude = location.coords.latitude, // широта
      longitude = location.coords.longitude; //долгота

    setLatitude(latitude);
    setLongitude(longitude)
    setLoading(false);
  }

  function error() {
    return <div>Не удалось определись местоположение</div>
  }

  navigator.geolocation.getCurrentPosition(currentLocation, error);

 if (loading) {
   return(
     <div>
       <div className='align-middle'>
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
