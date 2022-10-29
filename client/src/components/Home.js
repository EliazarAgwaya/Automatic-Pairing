import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Navbar />
      <div
        className="bg-contain bg-no-repeat bg-[url('https://trello.com/1/cards/6354e86e18ab1a02e0045e46/attachments/6354f463c9746200bd5a1544/download/pairjpg')]"
        // style={{
        //   backgroundRepeat: "no-repeat",
        //   backgroundImage: `url('https://trello.com/1/cards/6354e86e18ab1a02e0045e46/attachments/6354f463c9746200bd5a1544/download/pairjpg')`,
        // }}
      >
        {/* <div className="w-full" style={{ backgroundImage: `url('https://trello.com/1/cards/6354e86e18ab1a02e0045e46/attachments/6354f463c9746200bd5a1544/download/pairjpg')`, }} >
        <h1 className="text-center pt-8 text-4xl">Automatic student pairing</h1>
        <div className='bg-[#EDF4F9]  w-1/5 pl-8  ml-96 mt-44 '>
          <p>Putting students into random <br></br> pairings takes FOREVER. <br></br> Automatic pairing app is here to save you hours each week! Providing a fun, free, and easy way to create student study pairs.</p>
        </div> */}
        <h1 className="p-8 text-2xl font-bold text-center">
          Automatic Student pairing of <br/> people is just a click<br/> away
        </h1>
        <div className="flex">
          <div className="p-36 text-2xl w-6/12">
            <h2 className="text-black bg-white border-[#1D6697] border-4 p-4 w-60 font-medium rounded-lg shadow-lg text-centre">
              Putting students into random <br></br> pairings takes FOREVER.{" "}
              <br></br> Automatic pairing app is here to <br></br> save you
              hours each week! <br></br> Providing a fun, free, and easy way to{" "}
              <br></br> create student study pairs.
            </h2>
          </div>
          {/* <div className="w-6/12 h-full">
            <img src="" alt="Italian Trulli"></img>
          </div> */}
        </div>

        <div className="flex flex-row mt-1">
          <div className="ml-40">
            <div className="mt-2">
              <img
                className="object-cover h-40 w-96"
                src="https://trello.com/1/cards/6352455bf4c39c009967a985/attachments/635288c74a99790283d6f2cc/previews/635288c84a99790283d6f2d8/download/aboutus.jpg"
                alt="about"
              />
            </div>
            <div className="text-center w-60">
              <p>
                “You go through life wondering what is it all about life at the
                end of the day”
              </p>
            </div>
            <div className="flex flex-row">
              <img
                className="rounded-full object-cover h-36 w-36"
                src="https://trello.com/1/cards/6352455bf4c39c009967a985/attachments/635288e5c53ace0127a7f7d0/previews/635288e6c53ace0127a7f7d8/download/every.jpg"
                alt="about"
              />
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
            <p>
              We provide a solution to the pairing problem. For the teachers,
              leaders,<br></br>
              lectures and other groups who are involved in dealing with users
              or people,<br></br>
              this system is for you. <br></br>
              It allows you to automatically put people into pairs and keep
              track of the pairs at just a click of a button. <br></br>
              This gives efficiency in dealing with large number <br></br>
              of people.
            </p>
          </div>
        </div>

        <div className="contact mt-20" >
          <div className="background">
            <div
              style={{
                backgroundImage: `url('https://trello.com/1/cards/6354e878c89b2702f9492e14/attachments/6354f42f2811e7024ebd8d67/previews/6354f4302811e7024ebd8d75/download/contact.png')`,
              }}
            >
              <div className="mx-40">
                <h1 className="text-6xl pb-8 pt-4">Contact us </h1>
                <h3 className="text-2xl pb-4">
                  Our friendly team would like to hear from you
                </h3>
                <div className="bg-[#EDF4F9] rounded-3xl w-3/5 ">
                  <div className="p-11">
                    <form>
                      <label for="fname">Full Name</label>
                      <br></br>
                      <input
                        type="text"
                        id="fname"
                        className="rounded-2xl  pr-80 pl-4 pt-4 pb-4"
                        name="firstname"
                        placeholder="Full name.."
                      />
                      <br></br>
                      <label for="email">Email Address</label>
                      <br></br>
                      <input
                        type="text"
                        id="email"
                        className="rounded-2xl pr-80 pl-4 pt-4 pb-4"
                        name="email"
                        placeholder="Email Address.."
                      />
                      <br></br>
                      <label for="phone">Phone Number</label>
                      <br></br>
                      <input
                        type="text"
                        id="phone"
                        className="rounded-2xl pr-80 pl-4 pt-4 pb-4"
                        name="phone "
                        placeholder="Phone Number.."
                      />
                      <br></br>
                      <label for="message">Message</label>
                      <br></br>
                      <textarea
                        id="message"
                        className="rounded-2xl pr-80 pl-4 pt-4 pb-4"
                        name="message"
                        placeholder="Write something.."
                      ></textarea>
                      <br></br>
                      <input
                        type="submit"
                        className="bg-[#1D6697] text-white rounded-2xl pr-4 pl-4 pt-4 pb-4 justify-center"
                        value="Send Message"
                      />
                      <br></br>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
}

export default Home;
