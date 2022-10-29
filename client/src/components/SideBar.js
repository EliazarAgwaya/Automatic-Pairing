import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({handleLogout}) {
  return (
    <div className="flex">
      <div className="flex flex-col text-white min-h-screen p-3 bg-[#1D6697] shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Profile</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Students</span>
                </a>
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
      <div className="container mx-auto justify-center mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            {/* <div className="text-sm font-medium text-gray-500 truncate">
                            Total Profit
                        </div> */}
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              <label
                for="countries_disabled"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Pairing option
              </label>
              <select
                disabled=""
                id="countries_disabled"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected="">Option</option>
                <option value="US">Alphabetically</option>
                <option value="CA">Gender</option>
                <option value="FR">Combined</option>
              </select>
            </div>
            <br></br>
            <button class="bg-[#1D6697] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            {/* <div className="text-sm font-medium text-gray-500 truncate">
                            Total Orders
                        </div> */}
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              <label
                for="countries_disabled"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Separator
              </label>
              <select
                disabled=""
                id="countries_disabled"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected="">Option</option>
                <option value="US">.</option>
                <option value="CA">,</option>
                <option value="FR">&</option>
                <option value="DE">/</option>
                <option value="DE">-</option>
              </select>
            </div>
            <br></br>
            <button class="bg-[#1D6697] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Reset the pairs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
