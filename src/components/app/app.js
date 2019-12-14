import React, { Component } from "react";
import ForecastService from "../../services";
import "./app.css";
import Header from "../header";
import SearchPanel from "../searchpanel";
import ForecastTable from "../forecast-table";

export default class App extends Component {
  forecastService = new ForecastService();

  state = {
    searchCity: "",
    temperature: null,
    feelsLike: null,
    minTemp: null,
    maxTemp: null,
    pressure: null,
    humidity: null
  };

  constructor() {
    super();
    this.getForecast();
  }

  getForecast() {
    this.forecastService
      .getResource(
        "http://api.openweathermap.org/data/2.5/weather?q=Chelyabinsk,ru&appid=de94674d08936b9e16c744ccc510c21f"
      )
      .then(forecast => {
        this.setState({
          temperature: forecast.temp - 273.15,
          feelsLike: forecast.feels_like - 273.15,
          minTemp: forecast.temp_min - 273.15,
          maxTemp: forecast.temp_max - 273.15,
          pressure: 0.75 * forecast.pressure,
          humidity: forecast.humidity
        });
      });
  }

  render() {
    return (
      <div className="app">
        <Header title="Forecast App" />
        <SearchPanel />
        <ForecastTable
          cityName={this.state.searchCity}
          temperature={this.state.temperature}
          feelsLike={Math.floor(this.state.feelsLike)}
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          pressure={this.state.pressure}
          humidity={this.state.humidity}
        />
      </div>
    );
  }
}
