import "./style/Achievement.css";
import { BsFullscreen } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";

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
            <div className="achievement-name">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="achievement-describe text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellendus repudiandae doloremque ducimus porro ratione!</div>
          </div>
          <GiAchievement className="achievement-icon" />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}
import { useEffect, useState } from "react";

export default Achievement;
