import "./SubmitButton.css";

function SubmitButton(props) {
  try {
    return (
      <>
        <button type="submit" className="btn btn-primary" disabled={props.disabled}>
          {props.disabled ? <div className="wait-circle"></div> : props.content}
        </button>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default SubmitButton;
