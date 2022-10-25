import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({setCurrentUser}) {
  const navigate = useNavigate()
  const [url,setUrl] = useState('/login')
  // const [role, setRole] = useState(null)
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: "",
      role:"mentor"
    }
  });


  console.log(formData.user)

  const handleChange = (e) => {
    if(formData.user.role==='student'){
      setUrl('/student_login')
    }
    else{
      setUrl('/login')
    }
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  function authenticateUser(event){
    event.preventDefault();
    fetch(`${url}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData.user)
    })
    .then((response) => {
      if(response.ok){
          response.json().then((data) =>{
              setCurrentUser(data)
              formData.user.role==='student'? navigate('/student_dashboard'):navigate("mentor_dashboard")
              alert("Logged In  successfully")
          })
      }
      else{
          alert("Failed to log in")
          response.json().then((error)=>console.log(error.errors))
      }
  })
  }

  return (
      <figure className="h-screen flex bg-[#FFFFFF]">
        <div className="w-full max-w-md m-auto bg-[#EDF4F9] rounded-lg border border-primaryBorder shadow-default py-10 px-1">
          <div className="text-primary m-6">
            <div className="flex items-center mt-3 justify-center">
              <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
                Log in to your account
              </h1>
              <br></br>
            </div>
            <form className="font-normal" onSubmit={authenticateUser}> 
              <label className="text-left">Username:</label>
              <input
                name="username"
                type="text"
                value={formData.user.username}
                onChange={handleChange}
                placeholder="Username.."
                className={
                  "w-full p-2 text-primary border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <label>Password:</label>
              <input
                name="password"
                type="password"
                value={formData.user.password}
                onChange={handleChange}
                placeholder="Password"
                className={
                  "w-full p-2 text-primary  border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <label className="text-left">Role:</label>
              <select name="role"
                value={formData.user.role}
                onChange={handleChange}
               className={
                  "w-full p-2 text-primary  border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }>
                    <option value="mentor">Technical Mentor</option>
                    <option value="student">Student</option>
                </select>
              <div className="flex items-center mt-3">
              <button type="submit" class="inline-block px-6 py-2.5 bg-[#1D6697] text-[#FFFFFF] font-medium text-xs leading-tight  rounded shadow-md hover:bg-[#FFFFFF] hover:text-[#1D6697] focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login</button>

                {/* <button
                  className={
                    "bg-[#1D6697] hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue width-246 focus:outline-none focus:border-black"
                  }
                  value="Login"
                >
                  Login
                </button> */}
              </div>
            </form>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="flex items-center mt-2 space-x-0.5">
              <p>Don't have an account?</p>
              <button type="button" onClick={()=>navigate('/signup')} class="inline-block px-6 py-2.5 bg-white text-[#1D6697] font-medium text-xs leading-tight  rounded shadow-md hover:bg-[#1D6697] hover:text-white focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign up</button>
            </div>
          </div>
        </div>
      </figure>
      
  );
}
