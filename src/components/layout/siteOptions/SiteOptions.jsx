import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import secureLocalStorage from "react-secure-storage";
import "./style/SiteOptions.css";
import logo from "../../../assets/logo.png";
import DICTIONARY from "../../../data/dictionary/Dictionary";

function SiteOptions(props) {
  try {
    const [mode, setMode] = useState(secureLocalStorage.getItem("mode") ? secureLocalStorage.getItem("mode") : "dark");
    const [openLnaguages, setOpenLanguages] = useState(false);

    return (
      <>
        <div className="site-options container">
          <div className="logo">
            <img src={logo} alt="Abdullah Buhlaq" />
          </div>
          <div
            className="mode"
            onClick={() => {
              setMode(mode == "light" ? "dark" : "light");
              secureLocalStorage.setItem("mode", mode == "light" ? "dark" : "light");
              document.body.classList.remove(mode == "light" ? "light" : "dark");
              document.documentElement.classList.remove(mode == "light" ? "light" : "dark");
              document.body.classList.add(mode == "light" ? "dark" : "light");
              document.documentElement.classList.add(mode == "light" ? "dark" : "light");
            }}
          >
            <FaMoon className={"site-options-icon moon" + (mode == "light" ? " show" : " hidden")} />
            <FaSun className={"site-options-icon sun" + (mode == "dark" ? " show" : " hidden")} />
          </div>
          <div
            className="language"
            onClick={() => {
              setOpenLanguages(!openLnaguages);
            }}
          >
            {DICTIONARY[props.language]["websit__language__symbol"]}
            <ul className={"language-options" + (openLnaguages ? " show" : "")}>
              {Object.keys(DICTIONARY).map((item, index) => {
                return (
                  <li
                    key={index}
                    className="language-option"
                    onClick={() => {
                      props.setLanguage(item);
                      secureLocalStorage.setItem("language", item);
                    }}
                  >
                    <span>{DICTIONARY[item]["websit__language__symbol"] + " "}</span>
                    <span>{DICTIONARY[item]["websit__language__name"]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default SiteOptions;
