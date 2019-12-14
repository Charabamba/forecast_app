import React from "react";
import "./searchpanel.css";

const SearchPanel = () => {
  return (
    <div className="form-group search-panel">
      <input
        type="text"
        className="form-control"
        placeholder="Введите название города"
      />
      <button className="btn btn-primary">Поиск</button>
    </div>
  );
};

export default SearchPanel;
