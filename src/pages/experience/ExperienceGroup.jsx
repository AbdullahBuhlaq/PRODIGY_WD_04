import { BsLinkedin } from "react-icons/bs";
import ExperienceCard from "./ExperienceCard";
import "./style/ExperienceGroup.css";

function ExperienceGroup(props) {
  try {
    return (
      <>
        <div>
          <h3>{props.title}</h3>
          <div className="experience-content">
            <ExperienceCard title={"HTML"} value={"Experienced"} icon={<BsLinkedin className={"experience-details-icon"} />} />
            <ExperienceCard title={"HTML"} value={"Experienced"} icon={<BsLinkedin className={"experience-details-icon"} />} />
            <ExperienceCard title={"HTML"} value={"Experienced"} icon={<BsLinkedin className={"experience-details-icon"} />} />
            <ExperienceCard title={"HTML"} value={"Experienced"} icon={<BsLinkedin className={"experience-details-icon"} />} />
            <ExperienceCard title={"HTML"} value={"Experienced"} icon={<BsLinkedin className={"experience-details-icon"} />} />
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default ExperienceGroup;
