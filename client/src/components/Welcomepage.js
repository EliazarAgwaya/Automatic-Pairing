import React from 'react'
import Welcome from './Welcome'
import SideBar from './SideBar'

function Welcomepage({currentUser}) {
  return (
    <div>
        <Welcome currentUser={currentUser}/>
        {/* <SideBar handleLogout={handleLogout} />? */}
    </div>
  )
}

export default Welcomepage
// Done