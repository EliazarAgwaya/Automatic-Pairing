import React from "react";
function About() {
  return (
    <>
  <div className="flex flex-row">
  <div className="ml-40">
    <div className="mt-2">
        <h1 className="text-[44px]">Automatic Pairing</h1>
    <img className="object-cover h-40 w-96" src="https://trello.com/1/cards/6352455bf4c39c009967a985/attachments/635288c74a99790283d6f2cc/previews/635288c84a99790283d6f2d8/download/aboutus.jpg" alt="about"/>
    </div>
    <div className="text-center w-60">
    <p >“You go through life wondering what is it all about life at the end of the day”</p>
    </div>
    <div className="flex flex-row">
    
    <img className="rounded-full object-cover h-36 w-36" src="https://trello.com/1/cards/6352455bf4c39c009967a985/attachments/635288e5c53ace0127a7f7d0/previews/635288e6c53ace0127a7f7d8/download/every.jpg" alt="about"/>
    <div className="ml-8 mt-4">
    <div className="text-[#1D6697] text-[19]">
    But what do we say?
    </div>
    <div className="bg-[#713f12] h-8 w-24 text-center">
    Automation
 </div>
 </div>
    </div>
    </div>
    
    <div className="bg-[#e5e5e5] w-80  text-center ml-80 mt-4 mb-4 ">
    <p >We provide a  solution to the pairing  problem. For 
        the teachers, leaders,<br></br>
        lectures and other groups 
          who are involved in dealing   with users 
         or people,<br></br>
          this  system is for 
          you. <br></br>
          It allows you to automatically put people 
            into pairs and keep track 
             of the pairs at just a click 
             of a button. <br></br>
This gives efficiency in 
dealing with large number <br></br>
 of people.</p>
 </div>
 
 </div>
{/* <div className="bg-[#1D6697] h-36"></div> */}
<footer className="bg-[#1D6697] h-36 text-white">
          <div className="flex">
            <div className="pr-96 pl-4 pt-8">
              <h3>Feel free to reach us out!</h3>
            </div>
            <div className="pr-96 pt-8">
              <h3>Visit us Today!</h3>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-instagram"></a>
              <h3>Copyright: AutomaticPairing</h3>
            </div>
            <div className="pt-8">
              <h3>Get in touch</h3>
              <h3>Email</h3>
              <h4>02-200-000</h4>
            </div>
          </div>
        </footer>
  </>
  )
}

export default About;