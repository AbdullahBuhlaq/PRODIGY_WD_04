import "./Button.css";

function Button(props) {
  try {
    return (
      <>
        <a href={props.href} download={props.download} className={"btn" + (props.isPrimary ? " btn-primary" : "")}>
          {props.content}
        </a>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Button;
