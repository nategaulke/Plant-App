import React, { useEffect, useState } from "react";
import "./App.css";
import moment from "moment";
import CountDownMonths from "./CountDownMonths";
moment().format();
console.log(moment());

const Home = ({ plants }) => {
  // const [currentTime, setCurrentTime] = useState(moment());
  // const targetTime = moment().add(3, "days");
  // const timeBetween = moment.duration(targetTime.diff(currentTime));
  const [maxTime, setMaxTime] = useState(moment());
  return (
    <div className="home">
      {plants.map((plant) => (
        <div className="plantPreview" key={plant.id}>
          <h2>{plant.name}</h2>
          <p>{plant.species}</p>
          <CountDownMonths
            num={plant.wateringNum}
            freq={plant.wateringFreq}
          ></CountDownMonths>
        </div>
      ))}
    </div>
  );
};

export default Home;
