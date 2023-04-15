import React, { useEffect } from "react";
import Acard from "./Acard";
import Bookings from "./Bookings";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Cardd1 from "./Cardd1";
import Cardd2 from "./Cardd2";
import Contact from "./Contact";
import Delivery from "./Delivery";
import Gallery from "./Gallery";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Location from "./Location";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="hhh" data-aos="fade-up" data-aos-duration="2100">
      <Navbar />
      <div className="home" data-aos="zoom-in-left" data-aos-duration="2400">
        <Cardd1 />
        <Menu />
        <Cardd2 />
        <Delivery />
        <Card4 />
      </div>
      <div className="home2" data-aos="fade-up" data-aos-duration="2700">
        <Acard />
        <Card3 />
        <Bookings />
        <Gallery />
      </div>
      <div className="home3" data-aos="slide-up" data-aos-duration="3000">
        <Contact />
        <Card5 />
        <Location />
      </div>
    </div>
  );
};

export default Home;
