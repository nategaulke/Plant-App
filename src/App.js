import {
  Container,
  Box,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import "./App.css";
import plant from "./images/plant.jpg";
import { FacebookShareButton, FacebookIcon } from "react-share";

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="header">Folium</h1>
        <Box className="container">
          <PlantCard
            img={plant}
            title="pothos"
            description="The species is a popular houseplant in temperate regions but has also become naturalised in tropical and sub-tropical forests worldwide, including northern South Africa, Australia, Southeast Asia, South Asia, the Pacific Islands and the West Indies, where it has caused severe ecological damage in some cases."
          />
          <SocialMediaButtons
            description="So proud of my plant baby that I grew using Folium!"
          />
        </Box>
      </Container>
    </div >
  );
}

function SocialMediaButtons(props) {
  return (
    <FacebookShareButton
      url={"https://github.com/nategaulke/plant-app/"}
      quote={props.description}
      hashtag={"#folium"}
      className={SocialMediaButtons}>
      <FacebookIcon size={36} />
    </FacebookShareButton>
  );
}

function PlantCard(props) {
  return (
    <Button
    // onClick={openPopUp}
    >
      <Card className="card">
        <CardContent className="card_body">
          <img alt={props.title} className='card_photo' src={props.img} />
          <h2 className="card_title">{props.title}</h2>
          {/* <p className="card_description">{props.description}</p> */}
        </CardContent>
      </Card>

    </Button>
  )
};

export default App;
