import { Routes, Route,useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Students from "./components/Students";
import StudentPage from "./StudentPage";
import Welcomepage from "./components/Welcomepage";
import Pairs from "./components/Pairs";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const[isMentor,setIsMentor] = useState(null);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) =>{ 
          setCurrentUser(user)
          setIsMentor(false)
        });
      }

    });
  }, []);
  // fetch logged in mentor
  useEffect(() => {
    // auto-login
    fetch("/mentor").then((r) => {
      if (r.ok) {
        r.json().then((user) =>{ 
          setCurrentUser(user)
          setIsMentor(true)
        });
      }

    });
  }, []);

  useEffect(() => {
    fetch("/students")
      .then((response) => response.json())
      .then((students) => setStudents(students));
  }, []);

  function handleLogout(){
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        setIsMentor(null)
        navigate('/login')
      }
    });
  }

  if(!currentUser){
    return(
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home  currentUser={currentUser}/>} />
        {/* <Route exact path="/about" element={<About />} /> */}
        <Route
          exact
          path="/Login"
          element={<Login setCurrentUser={setCurrentUser}  setIsMentor={setIsMentor}/>}
        />
        <Route
          exact
          path="/Signup"
          element={<Signup setCurrentUser={setCurrentUser} setIsMentor={setIsMentor} />}
          />
        {/* <Route exact path="/contact" element={<ContactUs />} /> */}

      </Routes>
    
    </div>
    )

  }else{

  return (
    <div className="app">
     {isMentor? <Welcomepage currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogout={handleLogout}/> :<StudentPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
    </div>
  
  );
  }
}

export default App;
