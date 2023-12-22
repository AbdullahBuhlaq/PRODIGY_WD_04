import DICTIONARY from "../../data/dictionary/Dictionary";
import Achievement from "./Achievement";
import ACHIEVEMENTS from "./data/achievements";
import "./style/Achievements.css";

function Achievements(props) {
  try {
    return (
      <>
        <section id="achievements">
          <h5>{DICTIONARY[props.language]["Get To Know"]}</h5>
          <h2>{DICTIONARY[props.language]["About Me"]}</h2>

          <div className="container achievements-container">
            {ACHIEVEMENTS.map((item, index) => {
              return <Achievement key={index} item={item} />;
            })}
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Achievements;
