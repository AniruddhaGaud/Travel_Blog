import "./DestinationStyles.css";
import Temple1 from "../assets/1.jpg";
import Temple2 from "../assets/2.jpg";

const DestinationData = (props) => {
  return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img src={props.img1} alt="BaliImg" />
        <img src={props.img2} alt="BaliImg" />
      </div>
    </div>
  );
};

export default DestinationData;
