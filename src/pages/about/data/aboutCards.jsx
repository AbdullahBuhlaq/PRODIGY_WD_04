import { FaAward, FaFolderClosed, FaUsers } from "react-icons/fa6";

const ABOUT_CARDS = [
  {
    title: "Experience",
    value: "+2 years working",
    icon: <FaAward className="about-icon" />,
  },
  {
    title: "Clients",
    value: "+5 Worldwide",
    icon: <FaUsers className="about-icon" />,
  },
  {
    title: "Projects",
    value: "+10 completed",
    icon: <FaFolderClosed className="about-icon" />,
  },
];

export default ABOUT_CARDS;
