import {
  Card,
  CardContent,
  Button
} from '@mui/material';
import SocialMediaButtons from './SocialMediaButtons';

function PlantCard(props) {
  return (
    <Button
    // onClick={openPopUp}
    >
      <Card className="card">
        <CardContent className="card_body">
          <img alt={props.title} className="card_photo" src={props.img} />
          <h2 className="card_title">{props.title}</h2>
          <h4 className="card_title">{props.species}</h4>
          <p className="card_description">{props.description}</p>
          <SocialMediaButtons />
        </CardContent>
      </Card>
    </Button>
  );
}

export default PlantCard;
