import React, { Component } from "react";
import ForecastService from "../../services";
import "./app.css";
import Header from "../header";
import SearchPanel from "../searchpanel";
import ForecastTable from "../forecast-table";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchPanel />
      <ForecastTable />
    </div>
  );
};

export default App;
