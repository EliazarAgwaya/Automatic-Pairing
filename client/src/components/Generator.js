import React from "react";
export default function Generator({handleGeneratePairs,clearAll}){
    return(
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
            <button class="bg-[#1D6697] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleGeneratePairs}>
              Generate Pairs
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
            <button class="bg-[#1D6697] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={clearAll}>
              Reset the pairs
            </button>
          </div>
        </div>
      </div>
  );
}
