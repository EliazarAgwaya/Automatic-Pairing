import React, { useEffect, useState } from 'react'
import Sidebar from './SideBar'

function Pairs() {
  const [studentData, setStudentData] = useState([])

  //fetch student data 
  useEffect(() => {
    fetch('/students') 
    .then((res) => res.json())
    .then((data) => setStudentData(data))
  }, [])

  console.log(studentData)

  return (
    <div >
      <Sidebar />
      <div className='z-10 ml-60 mb-100' >
        <h1 className='text-[#8F6107] font-bold' >Student Pairs</h1>
      </div>
    </div>
  )
}

export default Pairs