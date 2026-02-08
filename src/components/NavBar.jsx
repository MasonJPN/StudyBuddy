import React from 'react'
import parrot from "../assets/parrot.png"
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
const Navigate = useNavigate()

  return (
  <nav>
    <div>
      <div className="brand">
         <h2 onClick={() => Navigate('/home')} className="logo-text">StudyBuddy</h2>
        <img src={parrot} alt="StudyBuddy mascot" className="logo-img" />
        
      </div>
          <p>Keep learning, keep growing</p>
    </div>
  </nav>
  )
}

export default NavBar