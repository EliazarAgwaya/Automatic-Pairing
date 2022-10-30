import React from "react";

export default function Navbar({ fixed,currentUser }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const Menus = ["Your profile", "Edit profile", "Settings", "Logout"]
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#F5F5F5] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className=" font-bold text-3xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="#pablo"
            >
              AP
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                    <h4>{currentUser.name}</h4><br></br>
                </a>
              </li>
            </ul>
            

<div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
<img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={currentUser.profile_image}
          alt=""
        />
        <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
{/* <div className="bg-[#1D6697] p-4 w-52 shadow-lg absolute -left-14 top-24">
  <ul>
    {
      Menus.map((menu)=> (
        <li key={menu}>{menu}</li>
      ))
    }
  </ul>

</div> */}
   
</div>

          </div>
        </div>
      </nav>
    </>
  );
}