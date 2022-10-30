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
import Sidebar from "./components/SideBar";
import Quizz from "./components/Quizz";

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
  console.log(isMentor)

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
    <div className="App 5" >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={<Login setCurrentUser={setCurrentUser}  setIsMentor={setIsMentor}/>}
        />
        <Route
          exact
          path="/signup"
          element={<Signup setCurrentUser={setCurrentUser} setIsMentor={setIsMentor} />}
          />
        <Route exact path="/Quizz" element={<Quizz/>} />

      </Routes>
    
    </div>
    )

  }else if(isMentor){
     return (
      <div className="app">
       
       {/* <Pairs /> */}
       <Sidebar handleLogout={handleLogout} />
       <Routes>
          <Route exact path ='/dashboard' element={<Welcomepage currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogout={handleLogout}/> }/>
          <Route element={<Pairs />} exact path='/pairs'/>
        </Routes>
      </div>
  
  );
  }
  else if(!isMentor){
    return (
    <div className="app">
        <StudentPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>)
  }
}

export default App;
