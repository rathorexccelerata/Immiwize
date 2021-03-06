import React from 'react'
import "../css/style.css";
import "../css/immiwize.css";
import Call from "../assets/icons/call.png";
import Address from "../assets/icons/address.png";
import Email from "../assets/icons/email.png";
const MarketPlaceDetails = () => {
  return (
    <>
      <section id="hero"></section>
      <h1 id="immi" className="section-title">
        MARKET <span>PLACE</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, corporis.</p>
      </h1>

      <section className="marketbg" id="img">
        <div className="hero container">
        </div>
      </section>
      <div>
        {/* Service Section */}
        <section id="services">
          <div className="services container">
            <div className="service-top">
              <h1 className="section-title">Serv<span>i</span>ces</h1>
              {/* <p>The Services which are offered by ImmiWize!</p> */}
            </div>
            <div className="service-bottom">
              <div className="service-item">
                <div className="icon">
                  <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
                </div>
                <h2>Students</h2>
                <p>
                  We provide you the best path to explore after your studies.
                  Right from finding college to the place of living, we help you
                  settle down.
                </p>

              </div>
              <div className="service-item">
                <div className="icon">
                  <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
                </div>
                <h2>Skilled Workers</h2>
                <p>
                  We have reserved many of the job spots reserved for you. We
                  ensure your passion is under the guidance of experts by
                  choosing the right path.
                </p>

              </div>
              <div className="service-item">
                <div className="icon">
                  <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
                </div>
                <h2>Visa Consultancy</h2>
                <p>
                  we guide you by exploring many other ways to fulfil your
                  dreams by settling down in your dream country with many other
                  options.
                </p>

              </div>
            </div>
          </div>
        </section>
        {/* End Service Section */}

        {/* About Section */}

        {/* End About Section */}
        {/* Contact Section */}
        <section id="contact">
          <div className="contact container">
            <div>
              <h1 className="section-title">
                Contact <span>us</span>
              </h1>
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
                  <img src={Address} alt="address" />
                </div>
                <div className="contact-info">
                  <h1>Address</h1>
                  <h2>
                    Suite 501, 218 Export Blvd. Mississauga, ON, L5S 0A7 Canada
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </div>

    </>
  )
}

export default MarketPlaceDetails