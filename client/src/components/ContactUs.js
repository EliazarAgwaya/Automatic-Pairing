// import { FormLabel } from '@mui/material'
import React from 'react'

function ContactUs() {
  return (
    <>
        <div className="navbar">
            {/* <div className="navbarContents">
                <h3 className="logo">AP</h3>
            </div> */}
            <div className="background">
                <div style={{backgroundImage:`url('https://trello.com/1/cards/6354e878c89b2702f9492e14/attachments/6354f42f2811e7024ebd8d67/previews/6354f4302811e7024ebd8d75/download/contact.png')`}}>
                <div className="mx-40">
                <h1 className='text-6xl p-11'>Contact us </h1>
                <h3 className='text-2xl p-11'>Our friendly team would like to hear from you</h3>
                <div className = 'bg-[#EDF4F9]'>
                <div className="p-11">

                    <form>
                        <label for ="fname">Full Name</label><br></br>
                        <input type="text" id="fname" className='mr-3'  name="firstname" placeholder="Full name.."/><br></br>
                        <label for ="email">Email Address</label><br></br>
                        <input type="text" id="email" name="email" placeholder="Email Address.."/><br></br>
                        <label for ="phone">Phone Number</label><br></br>
                        <input type="text" id="phone" name="phone " placeholder="Phone Number.."/><br></br>
                        <label for ="message">Message</label><br></br>
                        <textarea id="message" name="message" placeholder="Write something.."></textarea><br></br>
                        <input type="submit" className='bg-[#1D6697] text-white ' value="Send Message"/>


                        

                    </form>
                    </div>
                </div>
                </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default ContactUs