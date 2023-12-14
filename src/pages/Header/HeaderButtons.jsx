import CV from "../../assets/cv.pdf";
import Button from "../../components/form/button/Button";
import DICTIONARY from "../../data/dictionary/Dictionary";
import "./style/HeaderButtons.css";

function HeaderButtons(props) {
  try {
    return (
      <>
        <div className="header-buttons">
          <Button download={true} href={CV} content={DICTIONARY[props.language]["download cv"]} />
          <Button href={"#contact"} content={DICTIONARY[props.language]["lets talk"]} />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default HeaderButtons;
