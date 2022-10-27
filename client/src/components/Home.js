import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
function Home() {
  return (
    <>
    <Navbar />
    <div className="mb-10" >
      {/* <div className="w-full" style={{ backgroundImage: `url('https://trello.com/1/cards/6354e86e18ab1a02e0045e46/attachments/6354f463c9746200bd5a1544/download/pairjpg')`, }} >
        <h1 className="text-center pt-8 text-4xl">Automatic student pairing</h1>
        <div className='bg-[#EDF4F9]  w-1/5 pl-8  ml-96 mt-44 '>
          <p>Putting students into random <br></br> pairings takes FOREVER. <br></br> Automatic pairing app is here to save you hours each week! Providing a fun, free, and easy way to create student study pairs.</p>
        </div> */}
        <h1 className="p-8 text-3xl font-bold">Automatic Student pairing</h1>
      <div className="flex items-center" >
        <div className="pl-36 leading-loose text-xl w-6/12">
         
          <h2>Putting students into random <br></br> pairings takes FOREVER. <br></br> Automatic pairing app is here to <br></br> save you hours each week! <br></br> Providing a fun, free, and easy way to <br></br> create student study pairs.</h2>
        </div>
        <div className="w-6/12 h-full">
          <img src="https://trello.com/1/cards/6354e86e18ab1a02e0045e46/attachments/6354f463c9746200bd5a1544/download/pairjpg" alt="Italian Trulli"></img>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
  
}

export default Home;
