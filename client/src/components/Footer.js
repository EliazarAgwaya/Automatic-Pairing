import React from 'react'

function Footer() {
  return (
    <div>
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
  )
}

export default Footer