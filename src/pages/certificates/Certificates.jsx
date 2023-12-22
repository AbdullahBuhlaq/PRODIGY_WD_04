import DICTIONARY from "../../data/dictionary/Dictionary";
import Certificate from "./Certificate";
import CERTIFICATES from "./data/certificates";
import "./style/Certificates.css";

function Certificates(props) {
  try {
    return (
      <>
        <section id="certificates">
          <h5>{DICTIONARY[props.language]["Get To Know"]}</h5>
          <h2>{DICTIONARY[props.language]["About Me"]}</h2>

          <div className="container certificates-container">
            {CERTIFICATES.map((item, index) => {
              return <Certificate key={index} item={item} />;
            })}
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Certificates;
