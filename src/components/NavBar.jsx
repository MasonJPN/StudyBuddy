import React from 'react'
import parrot from "../assets/parrot.png"

const NavBar = () => {
  return (
  <nav>
    <div>
      <div className="brand">
         <h2 className="logo-text">StudyBuddy</h2>
        <img src={parrot} alt="StudyBuddy mascot" className="logo-img" />
        
      </div>
          <p>Keep learning, keep growing</p>
    </div>
  </nav>
  )
}

export default NavBar