import React from "react";
import "./App.css";

function PlantCreation({
  handleSubmit,
  onChange,
  value,
  trigger,
  setTrigger,
  children,
}) {
  /*
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [wateringNum, setWateringNum] = useState("");
  const [wateringFreq, setWateringFreq] = useState("days");
  */
  //const [plant, setPlant] = useState({});

  const plant = value;

  return trigger ? (
    <div className="plantCreation">
      <div className="plantCreation-inner">
        <div>Add a new member to your plant family!</div>
        <div>
          <button className="close-btn" onClick={() => setTrigger(false)}>
            Close
          </button>
        </div>
        {children}
      </div>
      <form className="forms" onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          placeholder="Gary"
          value={plant.name}
          onChange={(e) => {
            onChange({
              ...plant,
              name: e.target.value,
            });
          }}
        ></input>
        <label>species</label>
        <input
          type="text"
          placeholder="Cactus"
          value={plant.species}
          onChange={(e) => onChange({ ...plant, species: e.target.value })}
        ></input>
        <label>I need watering every </label>
        <input
          type="text"
          placeholder="2"
          value={plant.wateringNum}
          onChange={(e) => onChange({ ...plant, wateringNum: e.target.value })}
        ></input>
        <select
          value="wateringFreq"
          onChange={(e) => onChange({ ...plant, wateringFreq: e.target.value })}
        >
          <option value="days">days</option>
          <option value="weeks">weeks</option>
          <option value="months">months</option>
        </select>
        <button>Save</button>
      </form>
    </div>
  ) : (
    ""
  );
}

export default PlantCreation;