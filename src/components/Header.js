import logo from "./img/logo.png";
import bbc from "./img/logo-bbc.png";
import forbes from "./img/logo-forbes.png";
import techcrunch from "./img/logo-techcrunch.png";
import bi from "./img/logo-bi.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Nexter logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={bbc} alt="Seen on logo 1" />
        <img src={forbes} alt="Seen on logo 2" />
        <img src={techcrunch} alt="Seen on logo 3" />
        <img src={bi} alt="Seen on logo 4" />
      </div>
    </header>
  );
}

export default Header;
