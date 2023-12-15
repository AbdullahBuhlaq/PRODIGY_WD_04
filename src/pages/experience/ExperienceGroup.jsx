import ExperienceCard from "./ExperienceCard";
import "./style/ExperienceGroup.css";

function ExperienceGroup(props) {
  try {
    return (
      <>
        <div>
          <h3>{props.title}</h3>
          <div className="experience-content">
            {props.items.map((item, index) => {
              return <ExperienceCard key={index} title={item.title} value={item.value} icon={item.icon} />;
            })}
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default ExperienceGroup;
