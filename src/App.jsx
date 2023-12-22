import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import DICTIONARY from "./data/dictionary/Dictionary";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/Experience";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Testimonials from "./pages/testimonials/Testimonials";
import "./style/App.css";
import "./style/General.css";
import Navbar from "./components/layout/navbar/Navbar";
import Header from "./pages/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SiteOptions from "./components/layout/siteOptions/SiteOptions";
import Certificates from "./pages/certificates/Certificates";
import Achievements from "./pages/achievements/Achievements";

function App() {
  try {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
      if (secureLocalStorage.getItem("mode") == "light") {
        document.body.classList.add("light");
        document.documentElement.classList.add("light");
      }
      if (secureLocalStorage.getItem("language")) {
        setLanguage(secureLocalStorage.getItem("language"));
      }
    }, []);

    return (
      <>
        <ToastContainer />
        <SiteOptions />
        <Header language={language} />
        <Navbar />
        <About language={language} />
        <Certificates language={language} />
        <Achievements language={language} />
        <Experience language={language} />
        <Services language={language} />
        <Portfolio language={language} />
        <Contact language={language} toast={toast} />
        <Testimonials language={language} />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default App;
