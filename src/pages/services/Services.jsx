import ServicesGroup from "./ServicesGroup";
import DICTIONARY from "../../data/dictionary/Dictionary";
import "./style/Services.css";

function Services(props) {
  try {
    return (
      <>
        <section id="services">
          <h5>{DICTIONARY[props.language]["What I Offer"]}</h5>
          <h2>{DICTIONARY[props.language]["Services"]}</h2>

          <div className="container services-container">
            <ServicesGroup title={"Web Development"} />
            <ServicesGroup title={"UX/UI Design"} />
            <ServicesGroup title={"Content Creaction"} />
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Services;
