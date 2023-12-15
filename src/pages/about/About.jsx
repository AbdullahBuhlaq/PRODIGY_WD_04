import DICTIONARY from "../../data/dictionary/Dictionary";
import Button from "../../components/form/button/Button";
import AboutMe from "./AboutMe";
import "./style/About.css";
import AboutCards from "./AboutCards";

function About(props) {
  try {
    return (
      <>
        <section id="about">
          <h5>{DICTIONARY[props.language]["Get To Know"]}</h5>
          <h2>{DICTIONARY[props.language]["About Me"]}</h2>

          <div className="container about-container">
            <AboutMe />
            <AboutCards language={props.language} />
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default About;
