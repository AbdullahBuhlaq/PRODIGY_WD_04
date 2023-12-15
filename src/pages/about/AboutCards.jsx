import DICTIONARY from "../../data/dictionary/Dictionary";
import AboutCard from "./AboutCard";
import "./style/AboutCards.css";
import ABOUT_CARDS from "./data/aboutCards";
import Button from "../../components/form/button/Button";

function AboutCards(props) {
  try {
    return (
      <>
        <div className="about-content">
          <div className="about-cards">
            {ABOUT_CARDS.map((item, index) => {
              return <AboutCard key={index} title={DICTIONARY[props.language][item.title]} value={DICTIONARY[props.language][item.value]} icon={item.icon} />;
            })}
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, vero esse! Quod accusantium quibusdam recusandae, error, ad, maiores at adipisci alias pariatur facilis in nulla laborum asperiores voluptas doloribus beatae.</p>
          <Button href={"#contact"} content={DICTIONARY[props.language]["lets talk"]} />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default AboutCards;
