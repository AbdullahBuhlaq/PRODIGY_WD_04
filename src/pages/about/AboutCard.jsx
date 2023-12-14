import "./style/AboutCard.css";

function AboutCard(props) {
  try {
    return (
      <>
        <article className="about-card">
          {props.icon}
          <h5>{props.title}</h5>
          <small>{props.value}</small>
        </article>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default AboutCard;
