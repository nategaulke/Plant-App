import React from "react";
import "./App.css";

function Topbar(props) {
  return (
    <div className="Topbar">
      <div id="greeting-container">
        <div id="greeting">Hello! How are you</div>
      </div>

      <button className="newPlantButton" onClick={() => props.onClick(true)}>
        +
      </button>
    </div>
  );
}

export default Topbar;
