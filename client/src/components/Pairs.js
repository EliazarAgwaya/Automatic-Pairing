import React, { useEffect, useState } from 'react'
import Generator from './Generator'
import { uniqueNamesGenerator, Config, names, animals, adjectives, starWars } from 'unique-names-generator';

import Pair from './Pair'
import Sidebar from './SideBar'

function Pairs() {
  const[group, setGroups] = useState(null)
  const [studentData, setStudentData] = useState([])
  const[pairs,setPairs] = useState([])
  //fetch student data 
  useEffect(() => {
    fetch('/students') 
    .then((res) => res.json())
    .then((data) => setStudentData(data))
  }, [])
  useEffect(() => {
    fetch('/groups') 
    .then((res) => res.json())
    .then((data) => setGroups(data))
  }, [])

  const config = {
    dictionaries: [starWars]
  }
  
 
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

  function handleGeneratePairs(){
    if(group.length===0){
      const pairs = generatePairs(studentData)
        setPairs(pairs)
    }
    else{
      alert("reset pairs first")
    }
  }
  const renderPairs = pairs.map((pair) => {
    const characterName  = uniqueNamesGenerator(config);
    fetch('/groups',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name:characterName})
    })
    .then(r => r.json())
    .then(data =>{
      fetch(`/students/${pair.a.id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({group_id:data.id})
      }).then(r => r.json())
      .then(data => console.log(data))

      fetch(`/students/${pair.b.id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({group_id:data.id})
      })

    }
  )
      
 
    return <Pair pair={pair} key={pair.a.id}  handleGeneratePairs={handleGeneratePairs}  characterName={characterName}/>
  })
 function clearAll(){
    fetch('/groups/1',{
      method:"DELETE"
    })
    alert("Record Cleared successfully")
    setPairs([])
    setGroups([])
  }
  return (
    <div >
      <Generator handleGeneratePairs={handleGeneratePairs} clearAll={clearAll} />
      <div >
        {/* <h1 className='text-[#8F6107] text-center text-3xl font-bold' >Student Pairs</h1> */}
        {renderPairs}
      </div>
    </div>
  )
}

export default Pairs