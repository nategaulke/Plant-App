import { FacebookShareButton, FacebookIcon } from "react-share";

function SocialMediaButtons(props) {
  return (
    <FacebookShareButton
      url={"https://github.com/nategaulke/plant-app/"}
      quote="So proud of my plant baby that I grew using Potosu!"
      hashtag={"#Potosu"}
      className={SocialMediaButtons}
    >
      <FacebookIcon size={36} />
    </FacebookShareButton>
  );
}

export default SocialMediaButtons;
