import React from "react";

function Students({students}) {
  console.log((students))
  return (
  <div>
    <h1 className="text-[44px] text-[#8F6107]">List of all the Students</h1>
    {/* <div className="text-[20px] text-[#1D6697] ">
      <h2 className="ml-6">Name</h2>
      <h2 className="ml-40">Email</h2>
      <h2 className="ml-36">Picture</h2>
      <h2 className="ml-60">Gender</h2>
      </div> */}
      <table>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Picture</th>
          <th>Gender</th>
        </tr>
     
          {students.map((a,index)=>{
            return(
              <tr>

          <td className='px-10'>{index+1}</td>
          <td className='px-10'>{a.username}</td>
          <td className='px-10'>{a.email}</td>
          <td className='px-10'><img className='w-10 h-10 rounded-full' src={a.profile_image} /></td>
          <td className='px-10'>{a.gender}</td>
        </tr>
            )
          })}
         </table>
  </div>
  )
}

export default Students;
