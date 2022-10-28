import React, { useEffect, useState } from 'react'
import Pair from './Pair'
import Sidebar from './SideBar'

function Pairs() {
  const [studentData, setStudentData] = useState([])

  //fetch student data 
  useEffect(() => {
    fetch('/students') 
    .then((res) => res.json())
    .then((data) => setStudentData(data))
  }, [])

  //Generate random pairs 
  //Select random element
  function extractRandomElement(array) {
    return array.splice(Math.floor(Math.random()*array.length),1)[0];
  }

  //Pair students randomly
  function generatePairs(studentData) {
    let arr = studentData.slice(0);
    let result = [];
    while (arr.length > 1) {
      let i = extractRandomElement(arr);
      let j = extractRandomElement(arr);
    
      while (i===j) {
        arr.push(j);
        j = extractRandomElement(arr);
      }
      result.push({ a:i, b:j });
    } 
    return result
  }

  let pairs = generatePairs(studentData)
  console.log(pairs)
  const renderPairs = pairs.map((pair) => {
    return <Pair pair={pair} key={pair.a.id} />
  })

  return (
    <div >
      <Sidebar />
      <div className='z-10 ml-60 mb-100' >
        <h1 className='text-[#8F6107] font-bold' >Student Pairs</h1>
        {renderPairs}
      </div>
    </div>
  )
}

export default Pairs