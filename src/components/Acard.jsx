import React from "react";
import { BiNotepad } from "react-icons/bi";
import About from "./About";
const Acard = () => {
  return (
    <a className="carda" href="/aboutus">
      <div className="acard">
        <h2>
          About Us <BiNotepad />
        </h2>
      </div>
    </a>
  );
};

export default Acard;
