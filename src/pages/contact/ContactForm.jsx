import { useRef } from "react";
import Input from "../../components/form/input/Input";
import TextArea from "../../components/form/textarea/TextArea";
import emailjs from "emailjs-com";
import SubmitButton from "../../components/form/submitButton/SubmitButton";

function ContactForm(props) {
  try {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm("my_portfolio", "template_bgz69g9", form.current, "SYZ60ke8yXBKT3aFB").then(
        (result) => {
          if (result.text == "OK" || result.status == 200)
            props.toast.success("Message Have Been Sent Successfuly", {
              position: props.toast.POSITION.TOP_CENTER,
            });
        },
        (error) => {
          props.toast.error(error.text, {
            position: props.toast.POSITION.TOP_CENTER,
          });
        }
      );

      e.target.reset();
    };
    return (
      <>
        <form ref={form} onSubmit={sendEmail}>
          <Input type={"text"} name="name" placeholder={"Your Full Name"} required={true} />
          <Input type={"email"} name="email" placeholder={"Your Email"} required={true} />
          <TextArea name={"message"} rows={"7"} placeholder={"Your Message"} required={true} />
          <SubmitButton content={"Send Message"} />
        </form>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default ContactForm;
