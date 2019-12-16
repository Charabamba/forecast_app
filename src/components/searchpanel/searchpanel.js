import React, { Component } from "react";
import "./searchpanel.css";

export default class SearchPanel extends Component {
  render() {
    return (
      <div className="form-group search-panel">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название города"
          onChange={this.props.onInputChange}
        />
        <button className="btn btn-primary" onClick={this.props.getForecast}>
          Поиск
        </button>
      </div>
    );
  }
}
