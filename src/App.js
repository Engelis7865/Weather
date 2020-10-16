import React, {Component} from 'react';
import './App.css';
import WeatherDisplay from "./weatherDisplay";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Container, Row, Col } from "react-bootstrap";

const Cities = [
  {name: "Samara", id: "499099", displayName: 'Самара'},
  {name: "Syzran", id: "484972", displayName: 'Сызрань'},
  {name: "Togliatti", id: "482283", displayName: 'Тольятти'},
  {name: "Kinel", id: "96803", displayName: 'Кинель'}
]

class App extends Component {
  constructor() {
    super()
    this.state ={
      activeCity: 0
    }
  }

  render() {
    const activeCity = this.state.activeCity;
    console.log(activeCity);

    return (
      <div className={'App'}>
        <div>
          <Container>
            <Row>
              <Col md={4} sm={4}>
                <h3>Меню городов</h3>
                {Cities.map((City, index) => (
                <Nav
                  bsStyle="pills"
                  stacked
                  activeKey={activeCity}
                  onSelect={() => {
                    this.setState({ activeCity: index });
                  }}
                >
                    <Nav.Link eventKey="link-1">{City.name}</Nav.Link>
                </Nav>
                ))}
              </Col>
              <Col md={8} sm={8}>
                <WeatherDisplay key={activeCity} City={Cities[activeCity]} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
