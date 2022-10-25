import React from "react";

function Students({id,
  name,
  email,
  image,
gender}) {
  return (
  <>
    <h1 className="text-[44px] text-[#8F6107] ml-96 mt-20">List of all the Students</h1>
    <div className="text-[20px] text-[#1D6697] ml-60 mt-20 flex flex-row">
      <h2 className="ml-6">Name</h2>
      <h2 className="ml-40">Email</h2>
      <h2 className="ml-36">Picture</h2>
      <h2 className="ml-60">Gender</h2>
      </div>

      <div className="text-[20px]  ml-60 mt-4 flex flex-row">
        <ol>
          <li>
            <h5>{name}</h5>
            <h5>{email}</h5>
            <img className="ml-96" src={image} alt="student" />
      <p>
        <strong>{gender}</strong>
      </p>
          </li>
        </ol>

      </div>
  </>
  )
}

export default Students;
