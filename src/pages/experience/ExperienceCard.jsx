import "./style/ExperienceCard.css";

function ExperienceCard(props) {
  try {
    return (
      <>
        <article className="experience-details">
          {props.icon}
          <div>
            <h4>{props.title}</h4>
            <small className="text-light">{props.value}</small>
          </div>
        </article>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default ExperienceCard;
