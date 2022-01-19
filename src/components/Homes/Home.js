import sprite from "../img/sprite.svg";
import "./Home.scss";

const Home = (props) => {
  const img = props.data.img,
    altImg = props.data.altImg,
    name = props.data.name,
    location = props.data.location,
    rooms = props.data.rooms,
    area = props.data.area,
    price = props.data.price;

  return (
    <div className="home">
      <img src={img} alt={altImg} className="home__img" />
      <svg className="home__like">
        <use xlinkHref={`${sprite}#icon-heart-full`}></use>
      </svg>
      <h5 className="home__name">{name}</h5>
      <div className="home__location">
        <svg>
          <use xlinkHref={`${sprite}#icon-map-pin`}></use>
        </svg>
        <p>{location}</p>
      </div>
      <div className="home__rooms">
        <svg>
          <use xlinkHref={`${sprite}#icon-profile-male`}></use>
        </svg>
        <p>{rooms} rooms</p>
      </div>
      <div className="home__area">
        <svg>
          <use xlinkHref={`${sprite}#icon-expand`}></use>
        </svg>
        <p>
          {area} m<span>2</span>
        </p>
      </div>
      <div className="home__price">
        <svg>
          <use xlinkHref={`${sprite}#icon-key`}></use>
        </svg>
        <p>{price}</p>
      </div>
      <button className="btn home__btn">Contact realtor</button>
    </div>
  );
};

export default Home;
