import SOCIAL_MEDIA from "../../../pages/Header/data/socialMedia";
import TABS from "../navbar/tabs";
import "./style/Footer.css";
import logo from "../../../assets/logo.png";

function Footer(props) {
  try {
    return (
      <>
        <footer>
          <img src={logo} alt="Abdullah Buhlaq" className="footer-logo" />
          <ul className="permalinks">
            {TABS.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.title}</a>
                </li>
              );
            })}
          </ul>
          <div className="footer-socials">
            {SOCIAL_MEDIA.map((item, index) => {
              return (
                <a key={index} href={item.href}>
                  {item.icon}
                </a>
              );
            })}
          </div>
          <div className="footer-copyright">
            <small>&copy; Abdullah Buhlaq. All rights reserved.</small>
          </div>
        </footer>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Footer;
