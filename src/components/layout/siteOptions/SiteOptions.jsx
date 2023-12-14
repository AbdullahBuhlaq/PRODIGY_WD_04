import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import secureLocalStorage from "react-secure-storage";
import "./style/SiteOptions.css";

function SiteOptions(props) {
  try {
    const [mode, setMode] = useState(secureLocalStorage.getItem("mode") ? secureLocalStorage.getItem("mode") : "dark");
    return (
      <>
        <div className="site-options">
          <div>
            <FaMoon
              className={"site-options-icon moon" + (mode == "light" ? " show" : " hidden")}
              onClick={() => {
                setMode("dark");
                console.log(mode);
                secureLocalStorage.setItem("mode", "dark");
                document.body.classList.remove("light");
                document.documentElement.classList.remove("light");
                document.body.classList.add("dark");
                document.documentElement.classList.add("dark");
              }}
            />
            <FaSun
              className={"site-options-icon sun" + (mode == "dark" ? " show" : " hidden")}
              onClick={() => {
                setMode("light");
                console.log(mode);
                secureLocalStorage.setItem("mode", "light");
                document.body.classList.remove("dark");
                document.documentElement.classList.remove("dark");
                document.body.classList.add("light");
                document.documentElement.classList.add("light");
              }}
            />
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default SiteOptions;
