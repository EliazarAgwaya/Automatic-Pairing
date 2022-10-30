import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#1D6697] h-36 text-white">
        <div className="pt-10 flex justify-around">
          <div>
            <h3>Feel free to reach us out!</h3>
          </div>
          <div>
            <h3>Visit us Today!</h3>
            <a href="#" className="fa fa-facebook p-2"></a>
            <a href="#" className="fa fa-twitter p-2"></a>
            <a href="#" className="fa fa-instagram p-2"></a>
            <h3>Copyright: AutomaticPairing</h3>
          </div>
          <div>
            <h3>Get in touch</h3>
            <h3>Email</h3>
            <h4>02-200-000</h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
