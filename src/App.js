import React, { Component } from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "c7f76ebc13a392d8abce125ebab05d90";
export default class App extends Component {
  state = {
    temperature: undefined,
    city: "",
    country: undefined,
    humidity: undefined,
    description: undefined,
    erorr:"",
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country){
      console.log(data.name);
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        // error:"Lütfen değeri giriniz... "
      });
    }
  }
  render() {
    return (
      <div>
      <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-4 title-container">
                  <Titles />
                </div>
                <div className="col-xs-8 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
