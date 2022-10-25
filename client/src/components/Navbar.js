import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-[#1D6697] h-20 w-full flex flex-row">
      <h1 className="text-[44px] text-[#FFFFFF] ml-4 f">AP</h1>

      <NavLink to="/login" exact="true">
        <button className="mt-6 ml-8">Login</button>
      </NavLink>

      <NavLink to="/signup" exact="true">
        <button className="mt-6 ml-8">Signup</button>
      </NavLink>

      <NavLink to="/Contact" exact="true">
        <button className="mt-6 ml-6">Contact Us</button>
      </NavLink>

      <NavLink to="/" exact="true">
        <button className="mt-6 ml-8">Home</button>
      </NavLink>

      <NavLink to="/about" exact="true">
        <button className="mt-6 ml-6">About Us</button>
      </NavLink>
    </div>
  );
};
export default Navbar;
