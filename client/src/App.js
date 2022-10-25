import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

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
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Login" element={<Login setCurrentUser={setCurrentUser}/>} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/myprofile" element={<StudentPage  currentUser={currentUser}/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
