import me from "../../assets/me3.png";
import "./style/Me.css";

function Me() {
  try {
    return (
      <>
        <div className="me">
          <img src={me} alt="" />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Me;
