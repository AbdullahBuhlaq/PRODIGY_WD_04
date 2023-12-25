function ContactOption(props) {
  try {
    return (
      <>
        <article className="contact-option">
          {props.item.icon}
          <h4>{props.item.name}</h4>
          <h5>{props.item.value}</h5>
          <a href={props.item.href} target="_blank">
            Send a message
          </a>
        </article>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default ContactOption;
