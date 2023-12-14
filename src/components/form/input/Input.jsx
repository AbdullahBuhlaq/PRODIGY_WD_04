function Input(props) {
  try {
    return (
      <>
        <input type={props.type} name={props.name} placeholder={props.placeholder} required={props.required} />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Input;
