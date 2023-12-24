import "./style/Achievement.css";
import { BsFullscreen } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import getTriangleText from "../../utils/getTriangleText";

function Achievement(props) {
  try {
    return (
      <>
        <div className="achievement-item">
          <img src={props.item.image} className="background-image" />
          <img src={props.item.image} alt="" className="achievement-image" />
          <BsFullscreen className="open-achievement-image" />

          <div className="top-triangle"></div>
          <div className="bottom-triangle"></div>
          <div className="achievement-details">
            <div className="achievement-name">{props.item.name}</div>
            <div className="achievement-describe text-light">
              <pre>{getTriangleText(props.item.describe, 35, 5)}</pre>
            </div>
          </div>
          <GiAchievement className="achievement-icon" />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Achievement;
