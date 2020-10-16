import React, {useState} from 'react';
import './App.css';
import WeatherDisplay from "./weatherDisplay";

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
   return <div className={'loading'}>loading</div>
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
