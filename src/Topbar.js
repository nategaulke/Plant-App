import React from "react";
import "./App.css";

function Topbar(props) {
  return (
    <div className="Topbar">
      <div id="greeting-container">
        <h1>Potosu</h1>
      </div>

      <button className="newPlantButton" onClick={() => props.onClick(true)}>
        +
      </button>
    </div>
  );
}

export default Topbar;
