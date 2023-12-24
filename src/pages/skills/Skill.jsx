import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./style/Skill.css";

function Skill(props) {
  try {
    return (
      <>
        <div className="skill-item">
          <div className="skill-describe">
            <div className="skill-name">{props.item.name}</div>
            <div className="skill-source">
              Source: <span className="text-light">{props.item.source}</span>
            </div>
            <div className="skill-link">
              Link:{" "}
              <span className="text-light">
                <a href={props.item.link}>{props.item.link}</a>
              </span>
            </div>
          </div>
          <div className="skill-chart">
            <CircularProgressbar
              value={props.item.value}
              text={`${props.item.text}`}
              styles={{
                path: {
                  strokeLinecap: "butt",
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                trail: {
                  strokeLinecap: "butt",
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                text: {
                  fontSize: "16px",
                },
              }}
            />
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Skill;
