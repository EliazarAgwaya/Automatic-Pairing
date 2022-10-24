import React from 'react'
function ContactUs() {
  return (
      <>
          <div className="contact">
              <div className="background">
                  <div style={{ backgroundImage: `url('https://trello.com/1/cards/6354e878c89b2702f9492e14/attachments/6354f42f2811e7024ebd8d67/previews/6354f4302811e7024ebd8d75/download/contact.png')` }}>
                      <div className="mx-40">
                          <h1 className='text-6xl pb-8 pt-4'>Contact us </h1>
                          <h3 className='text-2xl pb-4'>Our friendly team would like to hear from you</h3>
                          <div className='bg-[#EDF4F9] rounded-3xl w-3/5 '>
                              <div className="p-11">
                                  <form>
                                      <label for="fname">Full Name</label><br></br>
                                      <input type="text" id="fname" className='rounded-2xl  pr-80 pl-4 pt-4 pb-4' name="firstname" placeholder="Full name.." /><br></br>
                                      <label for="email">Email Address</label><br></br>
                                      <input type="text" id="email" className='rounded-2xl pr-80 pl-4 pt-4 pb-4' name="email" placeholder="Email Address.." /><br></br>
                                      <label for="phone">Phone Number</label><br></br>
                                      <input type="text" id="phone" className='rounded-2xl pr-80 pl-4 pt-4 pb-4' name="phone " placeholder="Phone Number.." /><br></br>
                                      <label for="message">Message</label><br></br>
                                      <textarea id="message" className='rounded-2xl pr-80 pl-4 pt-4 pb-4' name="message" placeholder="Write something.."></textarea><br></br>
                                      <input type="submit" className='bg-[#1D6697] text-white rounded-2xl pr-4 pl-4 pt-4 pb-4 justify-center' value="Send Message" /><br></br>
                                  </form>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
          <footer className='bg-[#1D6697] h-36 text-white'>
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
                  <div className='pt-8'>
                     <h3>Get in touch</h3>
                     <h3>Email</h3>
                     <h4>02-200-000</h4>
                  </div>
              </div>
          </footer>
        </>
    )
}
export default ContactUs