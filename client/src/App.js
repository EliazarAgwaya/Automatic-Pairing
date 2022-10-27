import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import StudentPage from "./StudentPage";

function App() {
  const [currentUser,setCurrentUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user)});
      }
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Login" element={<Login setCurrentUser={setCurrentUser}/>} />
        <Route exact path="/Signup" element={<Signup setCurrentUser={setCurrentUser}/>} />
        <Route exact path="/contact" element={<ContactUs />} />
       
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
