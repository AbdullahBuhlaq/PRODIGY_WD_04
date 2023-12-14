import DICTIONARY from "../../data/dictionary/Dictionary";
import HeaderButtons from "./HeaderButtons";
import Me from "./Me";
import SocialMedia from "./SocialMedia";
import "./style/Header.css";

function Header(props) {
  try {
    return (
      <>
        <header id="me">
          <div className="container header-container">
            <h5>{DICTIONARY[props.language]["Hello I'm"]}</h5>
            <h1>{DICTIONARY[props.language]["Abdullah Buhlaq"]}</h1>
            <h5 className="text-light">{DICTIONARY[props.language]["Full-Stack Developer"]}</h5>

            <HeaderButtons language={props.language} />

            <SocialMedia />

            <Me />
          </div>
        </header>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Header;
