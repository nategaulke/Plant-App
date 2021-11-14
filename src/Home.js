import React from "react";
import "./App.css";

const Home = ({ plants }) => {
  // const newplants = JSON.parse(db.plants);
  // console.log(typeof newplants);
  //   const plants = [
  //     {
  //       name: "Garry",
  //       species: "cacti",
  //       wateringNum: "4",
  //       wateringFreq: "days",
  //       id: 1,
  //     },
  //     {
  //       name: "Ferri",
  //       species: "fern",
  //       wateringNum: "3",
  //       wateringFreq: "months",
  //       id: 2,
  //     },
  //   ];

  return (
    <div className="home">
      {plants.map((plant) => (
        <div className="plantPreview" key={plant.id}>
          <h2>{plant.name}</h2>
          <p>{plant.species}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
