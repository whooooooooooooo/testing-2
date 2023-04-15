import React, { useEffect } from "react";
import Navbar from "./Navbar";
import image from "../assets/user1.png";
import image2 from "../assets/user2.jpg";
import image3 from "../assets/user3.jpg";
import image4 from "../assets/user4.jpg";
import image5 from "../assets/user5.jpg";
import image6 from "../assets/user6.jpg";
import image7 from "../assets/user7.jpg";
import image8 from "../assets/user8.jpg";
import r1 from "../assets/R1.jpg";
import r2 from "../assets/R2.jpg";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about">
      <Navbar />
      <div className="con">
        <div className="left">
          <a href="/">
            <AiOutlineArrowLeft className="icon" />
          </a>
          <div
            className="toptext"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed
              accusantium consequuntur recusandae, tempora animi obcaecati a ab
              doloremque. Tempore sint nihil sed, esse qui repellendus quidem
              incidunt vitae deserunt enim minus, unde voluptatum beatae laborum
              nam accusantium quis magni rerum! Quidem molestias pariatur minus
              quae ratione consequuntur sed quisquam.
            </p>
          </div>
          <div className="chef" data-aos="fade-left" data-aos-duration="2400">
            <h2>Our Chefs</h2>
            <div className="img">
              <img src={image} />
              <img src={image2} />
              <img src={image3} />
              <img src={image4} />
              <img src={image5} />
              <img src={image6} />
              <img src={image7} />
              <img src={image8} />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="img" data-aos="fade-right" data-aos-duration="2500">
            <img src={r2} />
            <img src={r1} />
            <img src={r1} />
            <img src={r2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
