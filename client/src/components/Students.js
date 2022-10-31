import React from "react";

function Students({students}) {
  console.log((students))
  return (
  <div className="ml-10">
    <h1 className="text-[44px] text-[#8F6107]">List of all the Students</h1>
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
