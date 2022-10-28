import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#1D6697] h-24 w-full flex flex-row">
      <h1 className="text-5xl text-[#FFFFFF] ml-4 pt-6 font-bold">AP</h1>

      <div className="font-500 text-xl mr-24">
        <NavLink to="/" exact="true">
          <button className="text-white mt-6 ml-8">Home</button>
        </NavLink>
        <NavLink to="/login" exact="true">
          <button className="bg-white w-24 h-10 rounded-lg mt-6 ml-8">
            Login
          </button>
        </NavLink>

        <NavLink to="/signup" exact="true">
          <button className="bg-white w-24 h-10 rounded-lg mt-6 ml-8">
            Signup
          </button>
        </NavLink>
      </div>

      {/* <NavLink to="/Contact" exact="true">
          <button className="mt-6 ml-6">Contact Us</button>

        </NavLink>
      <NavLink to="/about" exact="true">
        <button className="mt-6 ml-6">About Us</button>
      </NavLink> */}
    </div>
  );
};
export default Navbar;
