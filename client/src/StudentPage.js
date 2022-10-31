import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FooterT from "./components/FooterT";

function StudentPage({ currentUser, setCurrentUser }) {

  const[group,setGroup] = useState()
  const[pair,setPair] = useState()
  const[email,setEmail] = useState()
  const[image,setImage] = useState()
  // console.log(currentUser)
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`/groups/${currentUser.group_id}`)
    .then(r=> r.json())
    .then(data => {
      setGroup(data.name)
      const pair = data.students.filter((item)=> item.id !==currentUser.id)
      setPair(pair[0].username)
      setImage(pair[0].profile_image)
      setEmail(pair[0].email)
    })
  },[])


  function logOutUser() {
    fetch("/student_logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        navigate("/login");
      }
    });
  }
  return (
    <div className="relative w-screen">
      <div className=" bg-[#F5F5F5] flex justify-between border-b-2 border-[#000000] items-center h-20  ">
        <div
          id="triangle"
          className="relative w-0 h-0 
   border-l-[106px] border-l-transparent
   border-b-[80px] border-b-[#8F6107]
   border-r-[106px] border-r-transparent"
        >
          <div className="absolute top-8 -left-6 text-4xl w-1/3 font-bold text-white">
            AP
          </div>
        </div>
        <div className="w-1/3 text-center font-bold">
          Welcome {currentUser.username}
        </div>
        <div className="flex items-center w-1/3 justify-end pr-8">
          <img
            className="rounded-full h-10 mr-5"
            src={currentUser.profile_image}
            alt="Profile pic"
          />
          <div>
            <h2 className="text-2xl">{currentUser.username}</h2>
            <p className="text-blue-900">{currentUser.email}</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <aside className="w-60 h-screen" aria-label="Sidebar">
          <div className="bg-[#1D6697] text-white min-h-screen mb-2">
            <NavLink
              to="/myprofile"
              className="font-bold text-white flex items-center p-2 text-base rounded-lg "
            >
              My Profile
            </NavLink>
            <NavLink
              to="/quiz"
              className="font-bold flex items-center p-2 text-base rounded-lg "
            >
              Quizes
            </NavLink>

            <NavLink
              onClick={logOutUser}
              className="font-bold mt-14 flex items-center p-2 text-base rounded-lg "
            >
              LogOut
            </NavLink>
          </div>
        </aside>
        <div className="min-h-screen w-full">
          <h2 className="text-center text-2xl p-11 font-bold">
            {" "}
            You belong to <i className="text-[#1D6697]"> {group}</i>
          </h2>
          <div className="border-2 border-[#8F6107] w-2/3 h-2/5 p-4 text-center m-auto shadow bg-[#E2F3FF] rounded-lg">
            <img
              className="rounded-full h-10 m-auto"
              src={image}
              alt="Profile pic"
            />
            <h2>
              <span className="font-bold  text-2xl">{pair}</span>{" "}
              <br />
              <br /> of email{" "}
              <span className="text-[#8F6107]">
               {email}
              </span>{" "}
              <br />
              <br />
              is your pair for this week
            </h2>
          </div>

          <div className=" w-2/3 h-1/3 p-4 text-center m-auto shadow ">
            <h2>
              {" "}
              Your Technical Mentor is{" "}
              <span className="font-bold  text-2xl">
                {currentUser.mentor.name}
              </span>{" "}
              <br />
              <br /> email:
              <span className="text-[#8F6107]">
                {currentUser.mentor.email}
              </span>{" "}
              <br />
              <br />
            </h2>
          </div>
        </div>
      </div>
      <FooterT />
    </div>
  );
}
export default StudentPage;
