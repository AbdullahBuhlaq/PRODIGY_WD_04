import me from "../../assets/me_about.jpg";
import "./style/AboutMe.css";

function AboutMe(props) {
  try {
    return (
      <>
        <div className="about-me">
          <div className="about-me-image">
            <img src={me} alt="" />
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default AboutMe;
