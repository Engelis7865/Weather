import React, { Component } from 'react';
import {Spinner, Card} from "react-bootstrap";

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
    console.log(latitude, longitude);

    const URL = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
      latitude +
      '&lon=' +
      longitude +
    '&lang=ru&&appid=3516ef7b1898fad563bffb815f9d2bb1&units=metric';

    console.log(URL);
    fetch(URL).then(res => res.json().then(json =>
      this.setState({weatherData: json})
    ))
  }

  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) {
      return(
        <div className={'App'}>
          <div className='loaderBlock'>
            <Spinner animation="border" variant="primary" />
          </div>
        </div>
      )
    }

    const weater = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weater.icon +'.png';

    console.log(weatherData);

    return (
      <div className={'weatherBlock'}>
        <Card>
          <Card.Header as="h1">{weatherData.name}</Card.Header>
          <Card.Body>
            <Card.Title>
              {weater.description}
              <img src={iconUrl} alt={weatherData.declaration}/>
            </Card.Title>
            <Card.Text>
              <p>Текущая темпетура: {weatherData.main.temp}&#8451;</p>
              <p>Скорость ветра: {weatherData.wind.speed}м/с</p>
              <p>Влажность: {weatherData.main.humidity}%</p>
              <p>Давление: {weatherData.main.pressure}&#127777;</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default WeatherDisplay;

