import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./components/Footer";

function StudentPage({currentUser}) {
  // console.log(currentUser)
  return (
    <div>
      <div className=" bg-[#F5F5F5] flex justify-between border-b-2 border-[#000000] items-center h-20  " >
        <div className="text-3xl w-1/3 font-bold">AP</div>
        <div className="w-1/3 text-center font-bold">Welcome Sammy Kipkosgei</div>
        <div className="flex items-center w-1/3 justify-end" >

          <img className="rounded-full h-10 mr-5" src="https://hips.hearstapps.com/hmg-prod/images/directly-above-shot-of-cappuccino-served-on-table-royalty-free-image-769817517-1564602749.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*" alt="Profile pic"/>
          <div>
            <h2 className="text-2xl">Sammy Kipkosgei</h2>
            <p className="text-blue-900">sam@dkut.ac.ke</p></div>
        </div>

      </div>
       <div className="flex">
       <aside className="w-60"  aria-label="Sidebar">
          <div className="bg-[#1D6697] text-white min-h-screen mb-2">
            <NavLink to="" className="flex items-center p-2 text-base font-normal rounded-lg ">
               Quizes
            </NavLink>
            <NavLink to=""  className="flex items-center p-2 text-base font-normal rounded-lg ">My Profile</NavLink>
            <NavLink  className="mt-14 flex items-center p-2 text-base font-normal rounded-lg " >LogOut</NavLink>
          </div>

        </aside>
          <div className="min-h-screen w-full" >
            
            <h2 className="text-center text-2xl p-11 font-bold"> You belong to <i className="text-blue-800">Conquerers group</i></h2>
            <div className="border-2 border-orange-500 w-2/3 h-2/5 p-4 text-center m-auto shadow bg-[#E2F3FF] rounded-lg"  >
            <img className="rounded-full h-10 m-auto" src="https://hips.hearstapps.com/hmg-prod/images/directly-above-shot-of-cappuccino-served-on-table-royalty-free-image-769817517-1564602749.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*" alt="Profile pic"/>
              <h2><span className="font-bold  text-2xl">Tabby Chepngetich</span> <br/><br/> of email  <span className="text-orange-900">tabby@moringaschool.com</span> <br/><br/>
              is your pair for this week</h2>
            </div>

            <div className=" w-2/3 h-2/5 p-4 text-center m-auto shadow "  >
              <h2> Your Technical Mentor is <span className="font-bold  text-2xl">Joseph Wambua</span> <br/><br/> email: <span className="text-orange-900">wambuajose@moringaschool.com</span> <br/><br/>
              </h2>
            </div>
          </div>
        </div>
        <Footer />
    </div>
   
  );
}
export default StudentPage;
