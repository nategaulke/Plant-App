import React from "react";
import "./App.css";
import PotosuPic from "./images/Potosu.png";

function Topbar(props) {
  return (
    <div className="Topbar">
      <div id="greeting-container">
        <img className="logo" src={PotosuPic} />
      </div>

      <button className="newPlantButton" onClick={() => props.onClick(true)}>
        +
      </button>
    </div>
  );
}

export default Topbar;
