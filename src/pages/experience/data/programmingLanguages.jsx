import { FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaReact, FaNodeJs, FaJava } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoJavascript, BiLogoJquery } from "react-icons/bi";
import { SiCsharp, SiCplusplus, SiDjango, SiSqlite, SiMongodb } from "react-icons/si";
import { TbSquareLetterM, TbBrandMysql } from "react-icons/tb";
import { DiProlog } from "react-icons/di";

const PROGRAMMING_LANGUAGES = [
  {
    title: "HTML",
    value: "Experienced",
    icon: <FaHtml5 className={"experience-details-icon"} />,
  },
  {
    title: "CSS",
    value: "Experienced",
    icon: <FaCss3Alt className={"experience-details-icon"} />,
  },
  {
    title: "Bootstrap",
    value: "Intermediate",
    icon: <FaBootstrap className={"experience-details-icon"} />,
  },
  {
    title: "Tailwind",
    value: "Intermediate",
    icon: <BiLogoTailwindCss className={"experience-details-icon"} />,
  },
  {
    title: "JavaScript",
    value: "Experienced",
    icon: <BiLogoJavascript className={"experience-details-icon"} />,
  },
  {
    title: "NodeJs",
    value: "Experienced",
    icon: <FaNodeJs className={"experience-details-icon"} />,
  },
  {
    title: "ReactJs",
    value: "Experienced",
    icon: <FaReact className={"experience-details-icon"} />,
  },
  {
    title: "JQuery",
    value: "Experienced",
    icon: <BiLogoJquery className={"experience-details-icon"} />,
  },
  {
    title: "C++",
    value: "Experienced",
    icon: <SiCplusplus className={"experience-details-icon"} />,
  },
  {
    title: "C#",
    value: "Junior",
    icon: <SiCsharp className={"experience-details-icon"} />,
  },
  {
    title: "JAVA",
    value: "Intermediate",
    icon: <FaJava className={"experience-details-icon"} />,
  },
  {
    title: "Matlab",
    value: "Intermediate",
    icon: <TbSquareLetterM className={"experience-details-icon"} />,
  },
  {
    title: "Python",
    value: "Experienced",
    icon: <FaPython className={"experience-details-icon"} />,
  },
  {
    title: "Django",
    value: "Experienced",
    icon: <SiDjango className={"experience-details-icon"} />,
  },
  {
    title: "MongoDB",
    value: "Experienced",
    icon: <SiMongodb className={"experience-details-icon"} />,
  },
  {
    title: "MySql",
    value: "Experienced",
    icon: <TbBrandMysql className={"experience-details-icon"} />,
  },
  {
    title: "Sqlite",
    value: "Experienced",
    icon: <SiSqlite className={"experience-details-icon"} />,
  },
  {
    title: "Prolog",
    value: "Junior",
    icon: <DiProlog className={"experience-details-icon"} />,
  },
];

export default PROGRAMMING_LANGUAGES;
