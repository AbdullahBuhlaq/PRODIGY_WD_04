import SocialElement from "./SocialElement";
import { BsLinkedin } from "react-icons/bs";
import SOCIAL_MEDIA from "./data/socialMedia";
import "./style/SocialMedia.css";

function SocialMedia(props) {
  try {
    return (
      <>
        <div className="header-socials">
          {SOCIAL_MEDIA.map((item, index) => {
            return <SocialElement key={index} href={item.href} icon={item.icon} />;
          })}
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default SocialMedia;
