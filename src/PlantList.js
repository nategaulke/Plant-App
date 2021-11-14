const PlantList = (props) => {
  const plants = props.plants;

  console.log(props, plants);
  return (
    <div className="plant-list">
      {plants.map((plant, index) => (
        <div className="plantPreview" key={index}>
          <h2>{plant.name}</h2>
          <p>{plant.species}</p>
        </div>
      ))}
    </div>
  );
};

export default PlantList;
