import React, {useEffect, useState} from 'react';
import './App.css';
import WeatherDisplay from "./ui/weatherDisplay";
import "bootstrap/dist/css/bootstrap.css";
import SpinnerLoading from "./ui/spinner";

export default function App() {
  const [location, setLocation] = useState({latitude: 0, longitude: 0, isLoading: true});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(currentLocation, locationError);

    function currentLocation(location) {
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        isLoading: false
      })
    }

    function locationError() {
      const URLGetIp = 'http://ip-api.com/json';

      fetch(URLGetIp).then(res => res.json().then(json =>
        setLocation({
          latitude: json.lat,
          longitude: json.lon,
          isLoading: false
        }),
      ))
    }
  }, [])

  if (location.isLoading) {
    return (
      <>
        <SpinnerLoading/>
      </>
    )
  }

  return (
    <div className={'App'}>
      <WeatherDisplay
        latitude={location.latitude}
        longitude={location.longitude}
      />
    </div>
  );
}