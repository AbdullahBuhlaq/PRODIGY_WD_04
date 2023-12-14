import picture from "../../assets/project.jpg";
import "./style/PortfolioElement.css";

function PortfolioElement(props) {
  try {
    return (
      <>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={picture} alt="" />
          </div>

          <h3>Lorem ipsum dolor sit amet.</h3>
          <div className="portfolio-item-buttons">
            <a href="gitub.com" className="btn">
              gthub
            </a>
            <a href="live.demo" className="btn btn-primary" target="_blank">
              live demo
            </a>
          </div>
        </article>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default PortfolioElement;
