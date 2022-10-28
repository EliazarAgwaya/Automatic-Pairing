import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

function StudentPage({ currentUser, setCurrentUser }) {
  // console.log(currentUser)
  const navigate = useNavigate()

  function logOutUser(){
    fetch("/student_logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        navigate('/login')
      }
    });
  }
  return (
    <div className="relative">
      <div className=" bg-[#F5F5F5] flex justify-between border-b-2 border-[#000000] items-center h-20  ">
        <div
          className="relative w-0 h-0 
   border-l-[105px] border-l-transparent
   border-b-[85px] border-b-[#8F6107]
   border-r-[105px] border-r-transparent"
        >
          <div className="absolute top-8 -left-6 text-4xl w-1/3 font-bold text-white">
            AP
          </div>
        </div>
        <div className="w-1/3 text-center font-bold">
          Welcome Sammy Kipkosgei
        </div>
        <div className="flex items-center w-1/3 justify-end pr-8">
          <img
            className="rounded-full h-10 mr-5"
            src={currentUser.profile_image}
            alt="Profile pic"
          />
          <div>
            <h2 className="text-2xl">{currentUser.username}</h2>
            <p className="text-blue-900">{currentUser.email}</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <aside className="w-60" aria-label="Sidebar">
          <div className="bg-[#1D6697] text-white min-h-screen mb-2">
            <NavLink
              to=""
              className="text-white flex items-center p-2 text-base font-normal rounded-lg "
            >
              My Profile
            </NavLink>
            <NavLink
              to=""
              className="flex items-center p-2 text-base font-normal rounded-lg "
            >
              Quizes
            </NavLink>

            <NavLink
              onClick={logOutUser}
              className="mt-14 flex items-center p-2 text-base font-normal rounded-lg "
            >
              LogOut
            </NavLink>
          </div>
        </aside>
        <div className="min-h-screen w-full">
          <h2 className="text-center text-2xl p-11 font-bold">
            {" "}
            You belong to <i className="text-blue-800">Conquerers group</i>
          </h2>
          <div className="border-2 border-orange-500 w-2/3 h-2/5 p-4 text-center m-auto shadow bg-[#E2F3FF] rounded-lg">
            <img
              className="rounded-full h-10 m-auto"
              src="https://hips.hearstapps.com/hmg-prod/images/directly-above-shot-of-cappuccino-served-on-table-royalty-free-image-769817517-1564602749.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
              alt="Profile pic"
            />
            <h2>
              <span className="font-bold  text-2xl">Tabby Chepngetich</span>{" "}
              <br />
              <br /> of email{" "}
              <span className="text-orange-900">
                tabby@moringaschool.com
              </span>{" "}
              <br />
              <br />
              is your pair for this week
            </h2>
          </div>

          <div className=" w-2/3 h-1/3 p-4 text-center m-auto shadow ">
            <h2>
              {" "}
              Your Technical Mentor is{" "}
              <span className="font-bold  text-2xl">Joseph Wambua</span> <br />
              <br /> email:{" "}
              <span className="text-orange-900">
                wambuajose@moringaschool.com
              </span>{" "}
              <br />
              <br />
            </h2>
          </div>
        </div>
      </div>
      {/* <Footer />
      <img
        src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.2.1858690084.1658745301&semt=sph"
        alt="Mentor"
      />
      <h3>Sammy Kipkosgei</h3>
      <p>sammykipkosgei@gmail.com</p>
      <p>Profile</p>
      <p>Quizes</p>
      <p>Logout</p>
      <h2>You belong to the conquerers group</h2>
      <h4>Tabitha Chepng'etich</h4>
      <img
        src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.2.1858690084.1658745301&semt=sph"
        alt="Pair"
      />
      <p>of email address tabithachepng'etich@gmail.com</p>
      <p>Is your pair for this week</p>
      <p>Your mentor is Dennis Munene </p>
      <img
        src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.2.1858690084.1658745301&semt=sph"
        alt="Pair"
      />
      <p>denniskariuki@gmail.com</p>
      <h6>Feel free to reach out to us!</h6>
      <h5>Visit Us Today</h5>
      <p>Copyright: Automatic Pairing</p>
      <h5>Get in touch</h5>
      <p>Email Us</p>
      <p>02-0000-1000</p> */}
      <footer className="absolute -bottom-16 text-black ml-52 mb-20">
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
  );
}
export default StudentPage;
