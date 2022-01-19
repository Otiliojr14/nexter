import sprite from "../img/sprite.svg";
import "./Feature.scss";

const Feature = (props) => {
  return (
    <div className="feature">
      <svg className="feature__icon">
        <use xlinkHref={`${sprite}#${props.data.icon}`}></use>
      </svg>
      <h4 className="heading-4 heading-4--dark">{props.data.title}</h4>
      <p className="feature__text">{props.data.text}</p>
    </div>
  );
};

export default Feature;
