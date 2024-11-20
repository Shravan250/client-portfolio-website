import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Footer.css";
import logo from "../../assets/LandingPage/Footer/EAbrown trademark logo on white 1.png";
import linkedin from "../../assets/LandingPage/Footer/ri_linkedin-fill.svg";
import instagram from "../../assets/LandingPage/Footer/Vector (1).svg";
import facebook from "../../assets/LandingPage/Footer/Vector.svg";
import twitter from "../../assets/LandingPage/Footer/Vector (2).svg";

function Footer() {
  const [focusedField, setFocusedField] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile ? (
        <div className="footer">
          <div className="feedback-parent">
            <div className="feedback">
              <div className="feedback-top">
                <div className="intro">
                  <div className="talk-to-us">Talk to us</div>
                  <div className="seeking-personalized-support-container">
                    <span>Seeking personalized support?</span>
                    <span className="request-a-call">
                      {" "}
                      Request a call from our team
                    </span>
                  </div>
                </div>
                <form className="group">
                  <div
                    className={`field ${
                      focusedField === "name" ? "input-focused" : ""
                    }`}
                  >
                    <label htmlFor="name" className="your-name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      className="footer-input"
                      placeholder="Snaji"
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div
                    className={`field1 ${
                      focusedField === "email" ? "input-focused" : ""
                    }`}
                  >
                    <label htmlFor="email" className="your-name">
                      Email
                    </label>
                    <input
                      id="email"
                      className="footer-input"
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div
                    className={`field2 ${
                      focusedField === "message" ? "input-focused" : ""
                    }`}
                  >
                    <label htmlFor="message" className="your-name">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="footer-input"
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  <button className="pw-web-buttons">
                    <div className="instance-parent">
                      <div className="send-request">Send Request</div>
                    </div>
                  </button>
                </form>
              </div>
            </div>
            <div className="footer-main">
              <div className="top1">
                <div className="top2">
                  <div className="section">
                    <Link to="products" className="products-footer">
                      PRODUCTS
                    </Link>
                    <div className="list">
                      <div className="footer-list-item">Retrofit Switches</div>
                      <div className="footer-list-item">Smart Sensors</div>
                      <div className="footer-list-item">Smart Curtain</div>
                    </div>
                  </div>
                  <div className="section">
                    <Link to="/contact" className="footer-contact-us">
                      {" "}
                      Contact us
                    </Link>
                    <div className="list">
                      <div className="footer-list-item">+1 (999) 999-99-99</div>
                      <div className="footer-list-item">
                        hello@logoipsum.com
                      </div>
                      <div className="footer-list-item">Pune, India</div>
                    </div>
                  </div>
                  <img
                    className="eabrown-trademark-logo-on-whit"
                    alt
                    src={logo}
                    onClick={() => (window.location.href = "/")} // Use window.location for logo
                  />
                </div>
                <div className="top">
                  <div className="section">
                    <div className="footer-contact-us">MORE</div>
                    <div className="list1">
                      <Link
                        to="/terms-and-conditions"
                        className="footer-list-item footer-links"
                      >
                        {" "}
                        Terms & Conditions
                      </Link>
                      <Link
                        to="/refund-cancellation-policy"
                        className="footer-list-item footer-links"
                      >
                        {" "}
                        Refund & Cancellation Policy
                      </Link>
                      <Link to="/faq" className="footer-list-item footer-links">
                        {" "}
                        FAQ
                      </Link>
                      <Link
                        to="/help"
                        className="footer-list-item footer-links"
                      >
                        {" "}
                        Help
                      </Link>
                      <Link
                        to="/privacy-policy"
                        className="footer-list-item footer-links"
                      >
                        {" "}
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="socialmedia">
                  <div className="footer-item-icon">
                    <img className="footer-vector-icon" alt src={facebook} />
                  </div>
                  <div className="footer-item-icon">
                    <img className="footer-vector-icon" alt src={instagram} />
                  </div>
                  <div className="footer-item-icon">
                    <img className="rilinkedin-fill-icon" alt src={linkedin} />
                  </div>
                  <div className="footer-item-icon">
                    <img className="vector-icon2" alt src={twitter} />
                  </div>
                </div>
                <div className="copyright-effortless-automat-wrapper">
                  <div className="copyright-effortless">
                    Copyright © Effortless Automation Pvt Ltd 2023 All rights
                    reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer">
          <div className="mv-feedback-parent">
            <div className="mv-footer-main">
              <div className="mv-top-section">
                <div className="mv-section">
                  <Link to="products" className="mv-products-footer">
                    PRODUCTS
                  </Link>
                  <div className="mv-list">
                    <div className="mv-footer-list-item">Retrofit Switches</div>
                    <div className="mv-footer-list-item">Smart Sensors</div>
                    <div className="mv-footer-list-item">Smart Curtain</div>
                  </div>
                </div>
                <div className="mv-section">
                  <Link to="/contact" className="mv-footer-contact-us">
                    {" "}
                    Contact us
                  </Link>
                  <div className="mv-list">
                    <div className="mv-footer-list-item">
                      +1 (999) 999-99-99
                    </div>
                    <div className="mv-footer-list-item">
                      hello@logoipsum.com
                    </div>
                    <div className="mv-footer-list-item">Pune, India</div>
                  </div>
                </div>
                <img
                  className="mv-eabrown-trademark-logo-on-whit"
                  alt
                  src={logo}
                  onClick={() => (window.location.href = "/")} // Use window.location for logo
                />
              </div>
              <div className="mv-bottom-section">
                <div className="mv-section-bottom">
                  <div className="mv-footer-contact-us">MORE</div>
                  <div className="list1">
                    <Link
                      to="/terms-and-conditions"
                      className="mv-footer-list-item footer-links"
                    >
                      {" "}
                      Terms & Conditions
                    </Link>
                    <Link
                      to="/refund-cancellation-policy"
                      className="mv-footer-list-item footer-links"
                    >
                      {" "}
                      Refund & Cancellation Policy
                    </Link>
                    <Link
                      to="/faq"
                      className="mv-footer-list-item footer-links"
                    >
                      {" "}
                      FAQ
                    </Link>
                    <Link
                      to="/help"
                      className="mv-footer-list-item footer-links"
                    >
                      {" "}
                      Help
                    </Link>
                    <Link
                      to="/privacy-policy"
                      className="mv-footer-list-item footer-links"
                    >
                      {" "}
                      Privacy Policy
                    </Link>
                  </div>
                </div>
                <form className="mv-feedback">
                  <div className="mv-seeking-personalized-support-container">
                    <span>Seeking personalized support?</span>
                    <span className="request-a-call">
                      {" "}
                      Request a call from our team
                    </span>
                  </div>
                  <div
                    className={`field1 ${
                      focusedField === "email" ? "input-focused" : ""
                    }`}
                  >
                    <input
                      id="email"
                      className="footer-input"
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter email"
                    />
                  </div>
                  <button className="pw-web-buttons">
                    <div className="instance-parent">
                      <div className="send-request">Send Request</div>
                    </div>
                  </button>
                </form>
              </div>
            </div>
            <div className="mv-bottom">
              <div className="socialmedia">
                <div className="footer-item-icon">
                  <img className="footer-vector-icon" alt src={facebook} />
                </div>
                <div className="footer-item-icon">
                  <img className="footer-vector-icon" alt src={instagram} />
                </div>
                <div className="footer-item-icon">
                  <img className="rilinkedin-fill-icon" alt src={linkedin} />
                </div>
                <div className="footer-item-icon">
                  <img className="vector-icon2" alt src={twitter} />
                </div>
              </div>
              <div className="copyright-effortless-automat-wrapper">
                <div className="copyright-effortless">
                  Copyright © Effortless Automation Pvt Ltd 2023 All rights
                  reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
