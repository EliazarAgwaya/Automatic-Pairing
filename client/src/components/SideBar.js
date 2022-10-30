import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({handleLogout}) {
  return (
    <div className="">
      <div className="flex flex-col text-white min-h-full p-3 bg-[#1D6697] shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Profile</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <NavLink
                to='/dashboard'
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>DashBoard</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink to='/pairs'
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Pairs</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink to='/history'
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>History</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Quizes</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Settings</span>
                </a>
              </li>
              <button className="rounded-sm flex items-center p-2 space-x-3 rounded-md" onClick={handleLogout}>
               
                  <span>Logout</span>
               
              </button>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}
