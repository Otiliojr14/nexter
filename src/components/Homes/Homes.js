import "./Homes.scss";
import img1 from "../img/house-1.jpeg";
import img2 from "../img/house-2.jpeg";
import img3 from "../img/house-3.jpeg";
import img4 from "../img/house-4.jpeg";
import img5 from "../img/house-5.jpeg";
import img6 from "../img/house-6.jpeg";
import Home from "./Home";

function Homes() {
  const HomesData = [
    {
      img: img1,
      altImg: "House 1",
      name: "Beautiful Family House",
      location: "USA",
      rooms: "5",
      area: "325",
      price: "$1,200,000",
    },
    {
      img: img2,
      altImg: "House 2",
      name: "Modern Glass Villa",
      location: "Canada",
      rooms: "6",
      area: "450",
      price: "$2,750,000",
    },
    {
      img: img3,
      altImg: "House 3",
      name: "Cozy Country House",
      location: "UK",
      rooms: "4",
      area: "250",
      price: "$850,000",
    },
    {
      img: img4,
      altImg: "House 4",
      name: "Large Rustical Villa",
      location: "Portugal",
      rooms: "6",
      area: "480 m",
      price: "$1,950,000",
    },
    {
      img: img5,
      altImg: "House 5",
      name: "Majestic Palace House",
      location: "Germany",
      rooms: "18",
      area: "4230",
      price: "$9,500,000",
    },
    {
      img: img6,
      altImg: "House 6",
      name: "Modern Familiy Apartment",
      location: "Italy",
      rooms: "3",
      area: "180",
      price: "$600,000",
    },
  ];

  return (
    <section className="homes">
      <Home data={HomesData[0]} />
      <Home data={HomesData[1]} />
      <Home data={HomesData[2]} />
      <Home data={HomesData[3]} />
      <Home data={HomesData[4]} />
      <Home data={HomesData[5]} />
    </section>
  );
}

export default Homes;
