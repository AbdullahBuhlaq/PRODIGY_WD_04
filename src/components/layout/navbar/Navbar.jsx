import "./navbar.css";
import Tab from "../tab/Tab";
import { BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import TABS from "./tabs";

function Navbar(props) {
  try {
    const [currentSection, setCurrentSection] = useState("#me");
    return (
      <>
        <nav>
          {TABS.map((item, index) => {
            return <Tab key={index} href={item.href} icon={item.icon} title={item.title} currentSection={currentSection} setCurrentSection={setCurrentSection} />;
          })}
        </nav>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Navbar;
