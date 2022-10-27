import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ContactUs from "./components/ContactUs";
import Students from "./components/Students";
import StudentPage from "./StudentPage"

function App() {
  const [currentUser,setCurrentUser] = useState(null)
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("/students")
      .then((response) => response.json())
      .then((students) => setStudents(students));
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
        <Route exact path="/students" element={<Students students={students} setStudents={setStudents} />} />
        <Route exact path="/myprofile" element={<StudentPage  currentUser={currentUser}/>} />

      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
