import DICTIONARY from "../../data/dictionary/Dictionary";
import Skill from "./Skill";
import SKILLS from "./data/skills";
import "./style/Skills.css";

function Skills(props) {
  try {
    return (
      <>
        <section id="skills">
          <h5>{DICTIONARY[props.language]["Get To Know"]}</h5>
          <h2>{DICTIONARY[props.language]["About Me"]}</h2>

          <div className="container skills-container">
            {SKILLS.map((item, index) => {
              return <Skill key={index} item={item} />;
            })}
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Skills;
