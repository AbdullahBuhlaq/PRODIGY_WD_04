import DICTIONARY from "../../data/dictionary/Dictionary";
import "./style/Experience.css";
import ExperienceGroup from "./ExperienceGroup";

function Experience(props) {
  try {
    return (
      <>
        <section id="experience">
          <h5>{DICTIONARY[props.language]["What Skills I Have"]}</h5>
          <h2>{DICTIONARY[props.language]["My Experience"]}</h2>

          <div className="container experience-container">
            <ExperienceGroup title={DICTIONARY[props.language]["frontend Development"]} language={props.language} />
            <ExperienceGroup title={DICTIONARY[props.language]["backend Development"]} language={props.language} />
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Experience;
