import { SiMaildotru } from "react-icons/si";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";

const SOCIAL_CONTACT = [
  {
    icon: <SiMaildotru className="contact-option-icon" />,
    name: "Email",
    value: "3bdullah.bu7la8@gmail.com",
    href: "mailto:3bdullah.bu7la8@gmail.com",
  },
  {
    icon: <FaTelegram className="contact-option-icon" />,
    name: "Telegram",
    value: "https://t.me/Abdullah_Buhlaq",
    href: "https://t.me/Abdullah_Buhlaq",
  },
  {
    icon: <FaWhatsapp className="contact-option-icon" />,
    name: "Whatsapp",
    value: "+963937776435",
    href: "https://api.whatsapp.com/send?+963937776435",
  },
];

export default SOCIAL_CONTACT;
