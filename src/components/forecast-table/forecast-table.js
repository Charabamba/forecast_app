import React from "react";
import "./forecast-table.css";

const ForecastTable = () => {
  return (
    <table className="forecast-table table table-hover">
      <thea>City Name</thea>
      <tr className="table-light">
        <td>temperature</td>
        <td>value</td>
      </tr>
      <tr className="table-light">
        <td>Feels like</td>
        <td>value</td>
      </tr>
      <tr className="table-light">
        <td>Min temp</td>
        <td>value</td>
      </tr>
      <tr className="table-light">
        <td>Max temp</td>
        <td>value</td>
      </tr>
      <tr className="table-light">
        <td>Pressure</td>
        <td>value</td>
      </tr>
      <tr className="table-light">
        <td>Humidity</td>
        <td>value</td>
      </tr>
      <tr className="table-light">
        <td>Wind</td>
        <td>value</td>
      </tr>
    </table>
  );
};

export default ForecastTable;
