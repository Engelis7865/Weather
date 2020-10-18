import React, {Component} from 'react';
import './App.css';
import WeatherDisplay from "./ui/weatherDisplay";
import "bootstrap/dist/css/bootstrap.css";
import SpinnerLoading from "./ui/spinner";

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      isLoading: true
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.currentLocation, this.locationError);
  }

  currentLocation = (location) => {
    this.setState({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      isLoading: false
    })
  }

  locationError = () => {
    const URLGetIp = 'http://ip-api.com/json';
    fetch(URLGetIp).then(res => res.json().then(json =>
        this.setState({
          latitude: json.lat,
          longitude: json.lon,
          isLoading: false
        }),
    ))
  }

  render() {
    const isLoading = this.state.isLoading;

    if (isLoading) {
      return (
        <>
          <SpinnerLoading/>
        </>
      )
    }

    return (
      <div className={'App'}>
        <WeatherDisplay
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
      </div>
    );
  }
}

export default App;

