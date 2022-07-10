import React from 'react'
import '../css/style.css'
import Call from '../assets/icons/call.png'
import Address from '../assets/icons/address.png'
import Email from '../assets/icons/email.png'
const ContactDetails = () => {
  return (
    <>
    {/* Contact Section */}
    <section id="contact">
          <div className="contact container">
            <div>
              <h1 className="section-title">Contact <span>us</span></h1>
            </div>
            <div className="contact-items">
              <div className="contact-item">
                <div className="icon">
                  <img src={Call} alt="call" />
                </div>
                <div className="contact-info">
                  <h1>Phone</h1>
                  <h2>+1-866-224-9493</h2>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <img src={Email} alt="email" />
                </div>
                <div className="contact-info">
                  <h1>Email</h1>
                  <h2>contact@xccelerata.com</h2>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <img src={Address}alt="address" />
                </div>
                <div className="contact-info">
                  <h1>Address</h1>
                  <h2>Suite 501, 218 Export Blvd. Mississauga, ON, L5S 0A7
                    Canada</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
    </>
  )
}

export default ContactDetails