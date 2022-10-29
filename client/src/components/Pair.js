import React from 'react'

function Pair({pair}) {
  const {a, b} = pair
  return (
    <div className='m-10 bg-[#EDF4F9] py-10 rounded-3xl border-2 border-solid border-blue-500 drop-shadow-xl'>
      <h1 className='text-center text-blue-500 text-2xl font-bold mb-4'>Conquerers</h1>
      <table>
        <tr>
          <th >Name</th>
          <th>Email</th>
          <th>Picture</th>
          <th>Gender</th>
        </tr>
        <tr>
          <td className='px-10'>{a.username}</td>
          <td className='px-10'>{a.email}</td>
          <td className='px-10'><img className='w-10 h-10 rounded-full' src={a.profile_image} /></td>
          <td className='px-10'>{a.gender}</td>
        </tr>
        <tr>
          <td className='px-10'>{b.username}</td>
          <td className='px-10'>{b.email}</td>
          <td className='px-10'><img className='w-10 h-10 rounded-full' src={b.profile_image} /></td>
          <td className='px-10'>{b.gender}</td>
        </tr>
      </table>
    </div>
  )
}

export default Pair