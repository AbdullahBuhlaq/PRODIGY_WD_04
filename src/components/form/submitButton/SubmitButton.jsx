import "./SubmitButton.css";

function SubmitButton(props) {
  try {
    return (
      <>
        <button type="submit" className="btn btn-primary">
          {props.content}
        </button>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default SubmitButton;
