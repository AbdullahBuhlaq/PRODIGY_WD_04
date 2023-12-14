import { BsLinkedin } from "react-icons/bs";

function ContactOption(props) {
  try {
    return (
      <>
        <article className="contact-option">
          <BsLinkedin className="contact-option-icon" />
          <h4>Email</h4>
          <h5>sdlfkj@gmail.com</h5>
          <a href="sdflkj@gmail.com" target="_blank">
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
