import DICTIONARY from "../../data/dictionary/Dictionary";
import PortfolioElement from "./PortfolioElement";
import "./style/Portfolio.css";

function Portfolio(props) {
  try {
    return (
      <>
        <section id="portfolio">
          <h5>{DICTIONARY[props.language]["My Recent Work"]}</h5>
          <h2>{DICTIONARY[props.language]["Portfolio"]}</h2>

          <div className="container portfolio-container">
            <PortfolioElement />
            <PortfolioElement />
            <PortfolioElement />
            <PortfolioElement />
            <PortfolioElement />
            <PortfolioElement />
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Portfolio;
