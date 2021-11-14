import { FacebookShareButton, FacebookIcon } from "react-share";

function SocialMediaButtons(props) {
  return (
    <FacebookShareButton
      url={"https://github.com/nategaulke/plant-app/"}
      quote={props.description}
      hashtag={"#folium"}
      className={SocialMediaButtons}
    >
      <FacebookIcon size={36} />
    </FacebookShareButton>
  );
}

export default SocialMediaButtons;
