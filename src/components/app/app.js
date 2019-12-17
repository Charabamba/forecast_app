import React, { Component } from "react";
import ForecastService from "../../services";
import "./app.css";
import Header from "../header";
import SearchPanel from "../searchpanel";
import ForecastTable from "../forecast-table";

export default class App extends Component {
  forecastService = new ForecastService();

  state = {
    searchCity: "Челябинск",
    temperature: null,
    feelsLike: null,
    minTemp: null,
    maxTemp: null,
    pressure: null,
    humidity: null,
    cityName: null
  };

  componentDidMount() {
    this.getForecast();
  }

  getForecast = () => {
    const apiKey = "ru&appid=de94674d08936b9e16c744ccc510c21f";
    this.forecastService
      .getResource(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity},${apiKey}`
      )
      .then(forecast => {
        this.setState({
          temperature: Math.floor(forecast.temp - 273.15),
          feelsLike: Math.floor(forecast.feels_like - 273.15),
          minTemp: Math.floor(forecast.temp_min - 273.15),
          maxTemp: Math.floor(forecast.temp_max - 273.15),
          pressure: Math.floor(0.75 * forecast.pressure),
          humidity: forecast.humidity,
          cityName: this.state.searchCity
        });
      });
  };

  onInputChange = e => {
    const city = e.target.value;
    this.setState({ searchCity: city });
  };

  render() {
    return (
      <div className="app">
        <Header title="Forecast App" />
        <SearchPanel
          searchCity={this.state.searchCity}
          onInputChange={this.onInputChange}
          getForecast={this.getForecast}
        />
        <ForecastTable
          cityName={this.state.cityName}
          temperature={this.state.temperature}
          feelsLike={this.state.feelsLike}
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          pressure={this.state.pressure}
          humidity={this.state.humidity}
        />
      </div>
    );
  }
}
