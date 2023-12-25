import DICTIONARY from "../../data/dictionary/Dictionary";
import ContactForm from "./ContactForm";
import ContactOption from "./ContactOption";
import SOCIAL_CONTACT from "./data/SocialContact";
import "./style/Contact.css";

function Contact(props) {
  try {
    return (
      <>
        <section id="contact">
          <h5>{DICTIONARY[props.language]["Get In Touch"]}</h5>
          <h2>{DICTIONARY[props.language]["Contact Me"]}</h2>

          <div className="container contact-container">
            <div className="contact-options">
              {SOCIAL_CONTACT.map((item, index) => {
                return <ContactOption key={index} item={item} />;
              })}
            </div>
            <ContactForm toast={props.toast} />
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Contact;
