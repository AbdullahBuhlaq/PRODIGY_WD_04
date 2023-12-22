import { useEffect } from "react";
import picture from "../../assets/project.jpg";
import "./style/Certificate.css";
import { BsFillAwardFill, BsFullscreen } from "react-icons/bs";

function Certificate(props) {
  try {
    return (
      <>
        <div className="certificate-item">
          <img src={props.item.image} className="background-image" />
          <img src={props.item.image} alt="" className="certificate-image" />
          <BsFullscreen className="open-certificate-image" />

          <div className="certificate-details">
            <BsFillAwardFill className="certificate-icon" />
            <div className="certificate-rate">
              Rate:
              <span className="text-light">{" " + props.item.rate + "%"}</span>
            </div>
            <div className="certificate-rate">
              Estimating:
              <span className="text-light">{" " + props.item.estimating}</span>
            </div>
            <div className="certificate-source">
              Source:
              <span className="text-light">{" " + props.item.source}</span>
            </div>
            <div className="certificate-name">{props.item.name}</div>
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Certificate;
