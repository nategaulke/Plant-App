import React from "react";
import "./App.css";
import PotosuWithLeaf from "./images/PotosuWithLeaf.jpg";

function Sidebar() {
  return (
    <div className="Sidebar">
      <br />
      <img alt={"PotosuWithLeaf"} className="mainPhoto" src={PotosuWithLeaf} />
      <h2 className="sideText">3 days</h2>
      <h3 className="sideText">until next watering</h3>
      <br />
      <div>
        <h4 className="sideText">Today's Inspirational Quote</h4>
        <label className="sideText">
          Act as if what you do makes a difference. It does.
          <br />
          William James
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
