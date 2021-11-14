import { Container, Box, Card, CardContent, Button } from "@mui/material";
import plant from "./images/plant.jpg";
import SocialMediaButtons from "./SocialMediaButtons";

function AppTwo() {
  return (
    <div className="AppTwo">
      <Container>
        <h1 className="header">Folium</h1>
        <Box className="container">
          <PlantCard
            img={plant}
            title="pothos"
            description="The species is a popular houseplant in temperate regions but has also become naturalised in tropical and sub-tropical forests worldwide, including northern South Africa, Australia, Southeast Asia, South Asia, the Pacific Islands and the West Indies, where it has caused severe ecological damage in some cases."
          />
          <SocialMediaButtons description="So proud of my plant baby that I grew using Folium!" />
        </Box>
      </Container>
    </div>
  );
}

export default AppTwo;
