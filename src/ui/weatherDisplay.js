import React, { Component } from 'react';
import {Card} from "react-bootstrap";
import SpinnerLoading from "./spinner";

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    }
  }

  componentDidMount() {
    const latitude = this.props.latitude,
      longitude = this.props.longitude;

    const URL = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
      latitude +
      '&lon=' +
      longitude +
    '&lang=ru&&appid=3516ef7b1898fad563bffb815f9d2bb1&units=metric';

    fetch(URL).then(res => res.json().then(json =>
      this.setState({weatherData: json})
    ))
  }

  render() {
    const weatherData = this.state.weatherData;

    if (!weatherData) {
      return(
        <>
          <SpinnerLoading/>
        </>
      )
    }

    const weather = weatherData.weather[0];
    const iconWeather = "http://openweathermap.org/img/w/" + weather.icon +'.png';
    const weatherDescription = weather.declaration;
    const windSpeed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;
    const pressure = weatherData.main.pressure;

    return (
      <div className={'weatherBlock'}>
        <Card>
          <Card.Header as="h1">{weatherData.name}</Card.Header>
          <Card.Body>
            <Card.Title as='h2'>
              {weatherData.main.temp}&#8451;
              <img
                src={iconWeather}
                alt={weatherDescription}
                title={weatherDescription}
              />
            </Card.Title>
              <Card.Text>
                Скорость ветра: {windSpeed}м/с<br/>
                Влажность: {humidity}%<br/>
                Давление: {pressure}&#127777;
              </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default WeatherDisplay;

