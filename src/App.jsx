import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Acard from "./components/Acard";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
