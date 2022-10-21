import { NavLink } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/login" exact="true">
        <button className="btn">Login</button>
      </NavLink>

      <NavLink to="/signup" exact="true">
        <button className="btn">Signup</button>
      </NavLink>

      
        

        <NavLink to="/" exact="true">
          <button className="btn">Home</button>
        </NavLink>
      
    </div>
  );
};
export default Navbar;
