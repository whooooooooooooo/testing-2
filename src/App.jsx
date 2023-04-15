import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Acard from "./components/Acard";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter basename="testing-2">
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="testing-2/aboutus" element={<About />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
