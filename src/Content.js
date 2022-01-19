import "./scss/styles.scss";
import story1 from "./components/img/story-1.jpeg";
import story2 from "./components/img/story-2.jpeg";
import Header from "./components/Header";
import Realtor from "./components/Realtor";
import Features from "./components/Features/Features";
import Homes from "./components/Homes/Homes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function Content() {
  return (
    <main className="container">
      <div className="sidebar">
        <button className="nav-btn"></button>
      </div>
      <Header />
      <Realtor />
      <Features />
      <div className="story__pictures">
        <img
          src={story1}
          alt="Couple with new house"
          className="story__img--1"
        />
        <img src={story2} alt="New house" className="story__img--2" />
      </div>
      <div className="story__content">
        <h3 className="heading-3 u-margin-bottom--small">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark u-margin-bottom--medium">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className="story__text u-margin-bottom--large">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
        <button className="btn">Find your own home</button>
      </div>
      <Homes />
      <Gallery />
      <Footer />
    </main>
  );
}

export default Content;
