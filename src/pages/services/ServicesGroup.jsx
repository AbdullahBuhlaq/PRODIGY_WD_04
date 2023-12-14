import ServicesElement from "./ServicesElement";
import { BsLinkedin } from "react-icons/bs";
import "./style/ServicesGroup.css";

function ServicesGroup(props) {
  try {
    return (
      <>
        <article className="service">
          <div className="service-head">
            <h3>{props.title}</h3>
          </div>

          <ul className="service-list">
            <ServicesElement content={"Lorem ipsum dolor sit amet, consectetur adipisicing."} icon={<BsLinkedin className={"service-list-icon"} />} />
            <ServicesElement content={"Lorem ipsum dolor sit amet, consectetur adipisicing."} icon={<BsLinkedin className={"service-list-icon"} />} />
            <ServicesElement content={"Lorem ipsum dolor sit amet, consectetur adipisicing."} icon={<BsLinkedin className={"service-list-icon"} />} />
            <ServicesElement content={"Lorem ipsum dolor sit amet, consectetur adipisicing."} icon={<BsLinkedin className={"service-list-icon"} />} />
            <ServicesElement content={"Lorem ipsum dolor sit amet, consectetur adipisicing."} icon={<BsLinkedin className={"service-list-icon"} />} />
            <ServicesElement content={"Lorem ipsum dolor sit amet, consectetur adipisicing."} icon={<BsLinkedin className={"service-list-icon"} />} />
          </ul>
        </article>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default ServicesGroup;
