import React from 'react'
import { Link } from "react-router-dom"
import '../css/button.css'
const HomepageDetails = () => {

  return (
    <>
      <div>
        {/* Hero Section  */}
        <section id="hero">
          <div className="hero container">
            <div>
              <h1>Welcome, <span /></h1>
              <h1>to best Immigration<span /></h1>
              <h1>and Consultancy Platform<span /></h1>
              <h1>ImmiWize <span /></h1>
              <a href="#contact" type="button" className="cta">Contact Us</a>
            </div>
          </div>
        </section>
        {/* End Hero Section  */}
        {/* Service Section */}
        <section id="services">
          <div className="services container">
            <div className="service-top">
              <h1 className="section-title">Serv<span>i</span>ces</h1>
              <p>The Services which are offered by ImmiWize!</p>
            </div>
            <div className="service-bottom">
              <div className="service-item">
                <div className="icon">
                  <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
                </div>
                <h2>Immigration</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                  debitis rerum, magni voluptatem sed architecto placeat beatae
                  tenetur officia quod
                </p>
                <Link to="/immigration">
                  <button className="btn btn2">Read More</button>
                </Link>
              </div>
              <div className="service-item">
                <div className="icon">
                  <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
                </div>
                <h2>Intuitions Services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                  debitis rerum, magni voluptatem sed architecto placeat beatae
                  tenetur officia quod
                </p>
                <Link to="/institutionservices">
                  <button className="btn btn2">Read More</button>
                </Link>
              </div>
              <div className="service-item">
                <div className="icon">
                  <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
                </div>
                <h2>Concierge Services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                  debitis rerum, magni voluptatem sed architecto placeat beatae
                  tenetur officia quod
                </p>
                <Link to="/conciergeservices">
                  <button className="btn btn2">Read More</button>
                </Link>
              </div>
              <div className="service-item">
                <div className="icon">
                  <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
                </div>
                <h2>Market Place</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                  debitis rerum, magni voluptatem sed architecto placeat beatae
                  tenetur officia quod
                </p>
                <Link to="/marketplace">
                  <button className="btn btn2">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* End Service Section */}

      </div>
    </>
  )
}

export default HomepageDetails