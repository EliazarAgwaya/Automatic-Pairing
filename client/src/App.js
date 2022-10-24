import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Footer  from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
 