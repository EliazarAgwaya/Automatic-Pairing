import React from "react";

function Footer2() {
  return (
    <div>
      <hr className="shadow-xl bg-black h-2"></hr>
      <footer className="bg-blue-100 text-black pb-20">
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

export default Footer2;
