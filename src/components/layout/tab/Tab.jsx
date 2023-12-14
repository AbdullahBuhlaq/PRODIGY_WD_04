import "./tab.css";

function Tab(props) {
  try {
    return (
      <>
        <div>
          <a href={props.href} className={props.currentSection == props.href ? " active" : ""} onClick={() => props.setCurrentSection(props.href)}>
            {props.icon}
          </a>
          <span>{props.title}</span>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Tab;
