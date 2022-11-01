import React, { useEffect, useState } from "react";

function ViewPairs() {
  const [pairs, setPairs] = useState([]);
  //fetch student data

  useEffect(() => {
    fetch("/groups")
      .then((res) => res.json())
      .then((data) => setPairs(data));
  }, []);
  return (
    <div>
      <h1 className="text-[#8F6107] text-center text-3xl font-bold">
        Student Pairs
      </h1>
      {pairs.map((item) => {
        return (
          <div className="m-10 bg-[#EDF4F9] py-10 rounded-3xl border-2 border-solid border-blue-500 drop-shadow-xl">
            <h1 className="text-center text-blue-500 text-2xl font-bold mb-4">
              {item.name}
            </h1>
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Picture</th>
                <th>Gender</th>
              </tr>
              <tr>
                <td className="px-10">{item.students[0].username}</td>
                <td className="px-10">{item.students[0].email}</td>
                <td className="px-10">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.students[0].profile_image}
                  />
                </td>
                <td className="px-10">{item.students[0].gender}</td>
              </tr>
              <tr>
                <td className="px-10">{item.students[1].username}</td>
                <td className="px-10">{item.students[1].email}</td>
                <td className="px-10">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.students[1].profile_image}
                  />
                </td>
                <td className="px-10">{item.students[1].gender}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default ViewPairs;
