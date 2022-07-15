import React from 'react'
import '../css/style.css'
import Immiwize from '../assets/images/immiwize.jpeg'

const HeaderDetails = () => {

  return (
    <>
    
    <section id="header">
        <div className="header container1">
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero">
              </a><h1><a href="#hero"> <img src={Immiwize} alt="image" />
                </a>
              </h1></div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar" />
              </div>
              <ul>
                <li><a href="http://localhost:3000/" data-after="Home">Home</a></li>
                <li><a href="#services" data-after="Service">Services</a></li>
                <li><a href="#contact" data-after="Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
     
      </>
      
  )
}

export default HeaderDetails