import React from "react";

function Students() {
  return (
  <div className="bg-[#1D6697] w-40 height: 100%;">
    <h1 className="text-[44px]  ml-4">AP</h1>
      <NavLink to="/login" exact="true">
        <button className="mt-6 ml-8">Login</button>
      </NavLink>
  </div>
  )
}

export default Students;
