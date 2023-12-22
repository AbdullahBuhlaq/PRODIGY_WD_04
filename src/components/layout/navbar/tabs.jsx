import { IoHome } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { GiSkills, GiAchievement } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { MdOutlineWork } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { BsFillAwardFill } from "react-icons/bs";

const TABS = [
  {
    href: "#me",
    icon: <IoHome />,
    title: "Home",
  },
  {
    href: "#about",
    icon: <IoPersonCircle />,
    title: "About Me",
  },
  {
    href: "#certificates",
    icon: <BsFillAwardFill />,
    title: "Certificates",
  },
  {
    href: "#achievements",
    icon: <GiAchievement style={{ fontSize: "20px" }} />,
    title: "Achievements",
  },
  {
    href: "#experience",
    icon: <GiSkills />,
    title: "Experience",
  },
  {
    href: "#services",
    icon: <GrServices />,
    title: "Services",
  },
  {
    href: "#portfolio",
    icon: <MdOutlineWork />,
    title: "Portfolio",
  },
  {
    href: "#contact",
    icon: <GrContact />,
    title: "Contact Me",
  },
];

export default TABS;
