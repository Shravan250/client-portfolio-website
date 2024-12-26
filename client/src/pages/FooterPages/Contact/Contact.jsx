import React, { useState } from "react";
import "./Contact.css";
import linkedin from "../../../assets/LandingPage/Footer/ri_linkedin-fill.svg";
import instagram from "../../../assets/LandingPage/Footer/Vector (1).svg";
import facebook from "../../../assets/LandingPage/Footer/Vector.svg";
import twitter from "../../../assets/LandingPage/Footer/Vector (2).svg";
import phoneIcon from "../../../assets/Contact/call.svg";
import emailIcon from "../../../assets/Contact/Email.svg";
import locationIcon from "../../../assets/Contact/Location.svg";
import API_URL from "../../../../config/config";

const Contact = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}api/contact/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, message, phone }),
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="contact-container">
      <div className="contact-feedback-parent">
        <div className="contact-feedback">
          <div className="contact-feedback-top">
            <div className="contact-intro">
              <div className="contact-talk-to-us">Talk to us</div>
              <div className="contact-seeking-personalized-support-container">
                <p>
                  Seeking personalized support?
                  <span className="contact-request-a-call">
                    {" "}
                    Request a call from our team
                  </span>
                </p>
              </div>
            </div>
            <form className="contact-group" onSubmit={handleSubmit}>
              <div
                className={`contact-field ${
                  focusedField === "name" ? "contact-input-focused" : ""
                }`}
              >
                <label htmlFor="name" className="contact-your-name">
                  Your Name
                </label>
                <input
                  id="name"
                  className="contact-footer-input"
                  placeholder="Snaji"
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div
                className={`contact-field1 ${
                  focusedField === "email" ? "contact-input-focused" : ""
                }`}
              >
                <label htmlFor="email" className="contact-your-name">
                  Email
                </label>
                <input
                  id="email"
                  className="contact-footer-input"
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div
                className={`contact-field2 ${
                  focusedField === "message" ? "contact-input-focused" : ""
                }`}
              >
                <label htmlFor="message" className="contact-your-name">
                  Message
                </label>
                <textarea
                  id="message"
                  className="contact-footer-input"
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              <button type="submit" className="contact-pw-web-buttons">
                <div className="contact-instance-parent">
                  <div className="contact-send-request">Send Request</div>
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="contact-footer-main">
          <div className="contact-us-info-container">
            <div className="contact-us-info-heading">Contact us</div>
            <div className="auto-layout-vertical">
              <div className="call-parent">
                <img className="call-icon" alt="" src={phoneIcon} />
                <div className="call-text"> +91-9503759493</div>
              </div>
              <div className="call-parent">
                <img className="call-icon" alt="" src={locationIcon} />
                <div className="sno560583-office-no3">
                  S.No.560/583, Office No.3, Near Dhone Tyres, Market Yard,
                  Pune-411037,Maharashtra
                </div>
              </div>
              <div className="email-parent">
                <img className="call-icon" alt="" src={emailIcon} />
                <a
                  className="effortlessautomationpvtltdgma"
                  href="mailto:effortlessautomationpvtltd@gmail.com"
                  target="_blank"
                >
                  effortlessautomationpvtltd@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-bottom">
            <div className="contact-socialmedia">
              <div className="contact-footer-item-icon">
                <img
                  className="contact-footer-vector-icon"
                  alt
                  src={facebook}
                />
              </div>
              <div className="contact-footer-item-icon">
                <img
                  className="contact-footer-vector-icon"
                  alt
                  src={instagram}
                />
              </div>
              <div className="contact-footer-item-icon">
                <img
                  className="contact-rilinkedin-fill-icon"
                  alt
                  src={linkedin}
                />
              </div>
              <div className="contact-footer-item-icon">
                <img className="contact-vector-icon2" alt src={twitter} />
              </div>
            </div>
            <div className="contact-copyright-effortless-automat-wrapper">
              <div className="contact-copyright-effortless">
                Copyright © Effortless Automation Pvt Ltd 2023 All rights
                reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
