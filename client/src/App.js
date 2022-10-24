import { Routes, Route } from "react-router-dom";
import React from "react";


import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>

    </div>
  );
}

export default App;
 