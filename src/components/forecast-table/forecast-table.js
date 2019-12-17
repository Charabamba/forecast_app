import React from "react";
import "./forecast-table.css";

const ForecastTable = ({
  cityName,
  temperature,
  pressure,
  minTemp,
  maxTemp,
  humidity,
  feelsLike,
  date
}) => {
  return (
    <div className="forecast-table">
      <h5>
        {cityName}: {date}
      </h5>
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Погода</td>
            <td>Значение</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-light">
            <td>Температура:</td>
            <td>{temperature}</td>
          </tr>
          <tr className="table-light">
            <td>Ощущается как:</td>
            <td>{feelsLike}</td>
          </tr>
          <tr className="table-light">
            <td>Минимальная температура:</td>
            <td>{minTemp}</td>
          </tr>
          <tr className="table-light">
            <td>Максимальная температура:</td>
            <td>{maxTemp}</td>
          </tr>
          <tr className="table-light">
            <td>Давление:</td>
            <td>{pressure}</td>
          </tr>
          <tr className="table-light">
            <td>Влажность:</td>
            <td>{humidity}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ForecastTable;
