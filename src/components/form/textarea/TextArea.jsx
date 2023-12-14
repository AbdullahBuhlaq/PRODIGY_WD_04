function TextArea(props) {
  try {
    return (
      <>
        <textarea name={props.name} rows={props.rows} placeholder={props.placeholder} required={props.required}></textarea>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default TextArea;
