import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Home from "./Home";
import CountDownMonths from "./CountDownMonths";
import PlantCreation from "./PlantCreation";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [buttonPopup, setButtonPopup] = useState(false);

  const [plants, setPlants] = useState([]);
  const fetchPlants = () => {
    // setTimeout(() => {
    fetch("http://localhost:8000/plants")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        console.log(data);
        setPlants(data);
      })
      .catch((err) => {
        setError(err.message);
      });
    // }, 1000);
  };

  useEffect(fetchPlants, []);

  const [formPlant, setFormPlant] = useState({
    name: "",
    species: "",
    wateringNum: "",
    wateringFreq: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //const plant = { name, species, wateringNum, wateringFreq };
    //console.log(typeof plant);

    fetch("http://localhost:8000/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formPlant),
    }).then(() => {
      console.log("new plant added");
      fetchPlants();
    });
  };

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="main">
        <Topbar onClick={setButtonPopup}></Topbar>
        <PlantCreation
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          handleSubmit={handleSubmit}
          value={formPlant}
          onChange={setFormPlant}
        ></PlantCreation>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {plants && <Home plants={plants}></Home>}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
