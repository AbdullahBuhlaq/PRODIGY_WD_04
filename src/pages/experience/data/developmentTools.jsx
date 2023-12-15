import { FaGithub, FaFigma } from "react-icons/fa6";
import { SiPostman, SiXampp, SiMysql, SiVisualstudiocode, SiJirasoftware } from "react-icons/si";
import { PiTreeStructureFill } from "react-icons/pi";
import { BiLogoUnity } from "react-icons/bi";
import { TbBrandReact } from "react-icons/tb";

const DEVELOPMENT_TOOLS = [
  {
    title: "GitHub",
    value: "Experienced",
    icon: <FaGithub className={"experience-details-icon"} />,
  },
  {
    title: "Postman",
    value: "Experienced",
    icon: <SiPostman className={"experience-details-icon"} />,
  },
  {
    title: "Draw.io",
    value: "Experienced",
    icon: <PiTreeStructureFill className={"experience-details-icon"} />,
  },
  {
    title: "XAMPP",
    value: "Experienced",
    icon: <SiXampp className={"experience-details-icon"} />,
  },
  {
    title: "MySql Workbench",
    value: "Intermediate",
    icon: <SiMysql className={"experience-details-icon"} />,
  },
  {
    title: "Figma",
    value: "Experienced",
    icon: <FaFigma className={"experience-details-icon"} />,
  },
  {
    title: "VSCode",
    value: "Experienced",
    icon: <SiVisualstudiocode className={"experience-details-icon"} />,
  },
  {
    title: "Unity",
    value: "Intermediate",
    icon: <BiLogoUnity className={"experience-details-icon"} />,
  },
  {
    title: "React Dev Tools",
    value: "Experienced",
    icon: <TbBrandReact className={"experience-details-icon"} />,
  },
  {
    title: "Jira",
    value: "Junior",
    icon: <SiJirasoftware className={"experience-details-icon"} />,
  },
];

export default DEVELOPMENT_TOOLS;
