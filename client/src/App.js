import React, { Component } from 'react';
import Axios from 'axios';
import logo from './Heraldic_Sun.svg.png';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';
import './App.css';
import WeatherList from './WeatherList';

const API_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=4368307ca81118f1e7f28256589c0e60&cnt=5&q=Pune&units=metric&mode=json';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          "weather" : []
      };
  }

  getWeather = () => {
      let weather = {};
      Axios.get(API_URL).then(response => {
          weather = response.data;
          this.setState({weather: weather.list});
      })
          .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Forecast For Pune</h1>
        </header>
          <div>
              {this.state.weather.length === 0 ?
                  (<p className="App-intro">Get 5 Day Weather Forecast for Pune, MH, India<br/><button onClick={this.getWeather} className="waves-effect waves-light btn">Get Weather</button></p>) :
                  (<WeatherList weather={this.state.weather.length === 0 ? ([]) : (this.state.weather)}/>)
              }
          </div>
      </div>
    );
  }
}

export default App;
