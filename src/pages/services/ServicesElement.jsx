import "./style/ServicesElement.css";

function ServicesElement(props) {
  try {
    return (
      <>
        <li>
          {props.icon}
          <p>{props.content}</p>
        </li>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default ServicesElement;
