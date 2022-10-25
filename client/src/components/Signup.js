import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  return (
    <figure className="h-screen flex bg-[#FFFFFF]">
      <div className="w-full max-w-md m-auto bg-[#EDF4F9] rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
              Create an account
            </h1>
            <br></br>
          </div>
          <form className="font-normal">
            <label className="text-left">Username:</label>
            <input
              name="username"
              placeholder="Username..."
              className={
                "w-full p-2 text-primary border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Email Address:</label>
            <input
              name="email address"
              type="email address"
              placeholder="Email..."
              className={
                "w-full p-2 text-primary  border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Password:</label>
            <input
              name="password"
              type="password"
              placeholder="Password..."
              className={
                "w-full p-2 text-primary  border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Password confirmation:</label>
            <input
              name="password"
              type="password"
              placeholder="Confirm password..."
              className={
                "w-full p-2 text-primary  border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Profile image:</label>
            <input
              name="image"
              type="image"
              placeholder="Profile image..."
              alt="profile photo"
              className={
                "w-full p-2 text-primary  border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <div className="flex items-center mt-3">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-[#1D6697] text-[#FFFFFF] font-medium text-xs leading-tight  rounded shadow-md hover:bg-[#FFFFFF] hover:text-[#1D6697] focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login
              </button>

              {/* <button
                  className={
                    "bg-[#1D6697] hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue width-246 focus:outline-none focus:border-black"
                  }
                  value="Login"
                >
                  Login
                </button> */}
            </div>
          </form>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="flex items-center mt-2 space-x-0.5">
            <p>Already have an account?</p>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-white text-[#1D6697] font-medium text-xs leading-tight  rounded shadow-md hover:bg-[#1D6697] hover:text-white focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}
