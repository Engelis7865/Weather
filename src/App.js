import React, {useState, useEffect} from 'react';
import './App.css';
import WeatherDisplay from "./ui/weatherDisplay";
import "bootstrap/dist/css/bootstrap.css";
import SpinnerLoading from "./ui/spinner";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [isLocationError, setLocationError] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(currentLocation, locationError);
  })

  function currentLocation(location) {
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
    setLoading(false);
  }

  function locationError() {
    setLocationError(true);
  }

  if (isLocationError) {
    return(
      <div>Не удалось определить местоположение</div>
    )
  }

 if (isLoading) {
   return(
     <>
       <SpinnerLoading/>
     </>
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
