import React, { Component } from 'react';

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    }
  }

  componentDidMount() {
    const City = this.props.City.name;

    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' +
      City+
    '&lang=ru&&appid=3516ef7b1898fad563bffb815f9d2bb1&units=metric';

    fetch(URL).then(res => res.json().then(json =>
      this.setState({weatherData: json})
    ))
  }

  render() {
    const weatherData = this.state.weatherData;
    console.log(weatherData)
    if (!weatherData) {
      return ( <div>Loading</div>)
    }
    const weater = weatherData.weather[0];
    const displayName = this.props.City.displayName;
    const iconUrl = "http://openweathermap.org/img/w/" + weater.icon +'.png';

    return (
      <div>
        <h1>
          {displayName}
        </h1>
        <h3>
          {weater.description}
          <img src={iconUrl} alt={weatherData.declaration}/>
        </h3>
        <p>Текущая темпетура: {weatherData.main.temp}°С</p>
        <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
      </div>
    );
  }
}

export default WeatherDisplay;

