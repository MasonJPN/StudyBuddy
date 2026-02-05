import React from 'react'
import insta from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import youtube from "../assets/youtube.png"



const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-pages">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Our Team</li>
        </ul>
      </div>
      <div className="footer-icons">
          <ul className="socials">
            <li><img src={insta}></img></li>
            <li><img src={facebook}></img></li>
            <li><img src={youtube}></img></li>
          </ul>
      </div>

    </div>
  )
}

export default Footer