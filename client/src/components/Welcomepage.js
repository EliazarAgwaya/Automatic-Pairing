import React from 'react'
import Welcome from './Welcome'
import SideBar from './SideBar'

function Welcomepage({handleLogout}) {
  return (
    <div>
        <Welcome />
        <SideBar handleLogout={handleLogout} />
    </div>
  )
}

export default Welcomepage
// Done