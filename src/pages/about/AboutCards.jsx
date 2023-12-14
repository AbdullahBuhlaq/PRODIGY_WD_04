import DICTIONARY from "../../data/dictionary/Dictionary";
import AboutCard from "./AboutCard";
import { BsLinkedin } from "react-icons/bs";
import "./style/AboutCards.css";

function AboutCards(props) {
  try {
    return (
      <>
        <div className="about-content">
          <div className="about-cards">
            <AboutCard title={DICTIONARY[props.language]["Experience"]} value={DICTIONARY[props.language]["+3 years working"]} icon={<BsLinkedin className="about-icon" />} />
            <AboutCard title={DICTIONARY[props.language]["Clients"]} value={DICTIONARY[props.language]["+200 Worldwide"]} icon={<BsLinkedin className="about-icon" />} />
            <AboutCard title={DICTIONARY[props.language]["Projects"]} value={DICTIONARY[props.language]["+80 combleted"]} icon={<BsLinkedin className="about-icon" />} />
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, vero esse! Quod accusantium quibusdam recusandae, error, ad, maiores at adipisci alias pariatur facilis in nulla laborum asperiores voluptas doloribus beatae.</p>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default AboutCards;
