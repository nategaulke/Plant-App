import {
  Container,
  Box,
  Card,
  CardContent
} from '@mui/material';
import "./App.css";
import plant from "./images/pothos.jpg";

function App() {
  return (
    <div className="App">
      <Container>
        <h1> My Plant App</h1>
        <Box className="container">
          <PlantCard
            img={plant}
            title="pothos"
            description="The species is a popular houseplant in temperate regions but has also become naturalised in tropical and sub-tropical forests worldwide, including northern South Africa, Australia, Southeast Asia, South Asia, the Pacific Islands and the West Indies, where it has caused severe ecological damage in some cases."
          />
          <PlantCard
            img={plant}
            title="pothos"
            description="The species is a popular houseplant in temperate regions but has also become naturalised in tropical and sub-tropical forests worldwide, including northern South Africa, Australia, Southeast Asia, South Asia, the Pacific Islands and the West Indies, where it has caused severe ecological damage in some cases."
          />
          <PlantCard
            img={plant}
            title="pothos"
            description="The species is a popular houseplant in temperate regions but has also become naturalised in tropical and sub-tropical forests worldwide, including northern South Africa, Australia, Southeast Asia, South Asia, the Pacific Islands and the West Indies, where it has caused severe ecological damage in some cases."
          />
          <PlantCard
            img={plant}
            title="pothos"
            description="The species is a popular houseplant in temperate regions but has also become naturalised in tropical and sub-tropical forests worldwide, including northern South Africa, Australia, Southeast Asia, South Asia, the Pacific Islands and the West Indies, where it has caused severe ecological damage in some cases."
          />
        </Box>
      </Container>
    </div >
  );
}

function PlantCard(props) {
  return (
    <Card className="card">
      <CardContent className="card_body">
        <img alt={props.title} className='card_photo' src={props.img} />
        <h2 className="card_title">{props.title}</h2>
        <p className="card_description">{props.description}</p>
      </CardContent>
    </Card>
  )
};

export default App;
