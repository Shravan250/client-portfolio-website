import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import gif from "../../assets/AboutUs/aboutus.gif";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 390);
      setIsTablet(width > 390 && width <= 850);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden"; // Disable scrolling during animation
      const timer = setTimeout(() => {
        setIsAnimating(false); // End animation after a delay
      }, 1500); // Animation duration
      return () => clearTimeout(timer); // Cleanup timer
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling after animation
    }
  }, [isAnimating]);

  return (
    <div className="AboutUs-container">
      {/* <div
        className={`about-us-landing ${
          isAnimating ? "fade-out-animation" : "hidden"
        }`}
      >
        <div className="about-us-heading">
          <p>
            Effortless Automation Pvt. Ltd. specializes in
            <span className="iot"> IoT </span>
            and
            <span className="iot"> smart home automation</span>, offering
            advanced, secure, and affordable solutions designed to empower MSMEs
            and transform everyday living in India.
          </p>
        </div>
      </div> */}
      {/* <div
        className={`about-us-main-content ${
          isAnimating ? "hidden" : "slide-in-animation"
        }`}
      > */}
      <div className="about-us-heading">
        <p>
          Effortless Automation Pvt. Ltd. specializes in
          <span className="iot"> IoT </span>
          and
          <span className="iot"> smart home automation</span>, offering
          advanced, secure, and affordable solutions designed to empower MSMEs
          and transform everyday living in India.
        </p>
      </div>
      <img className="smart-home-icon" alt src={gif} />

      <div className="aboutus-mission">
        <div className="our-mission-parent">
          <div className="our-mission">Our Mission</div>
          <div className="driving-the-future">
            Driving the Future of Smart Living
          </div>
        </div>
        <div className="mission-content">
          {isTablet ? (
            <div className="about-us-flex-wrap">
              <div>
                <div className="mission-content-container">
                  <div className="mission-content-container-1">
                    <p className="main-content-p">01</p>
                    <p className="main-content-heading">
                      Accessible Smart Living
                    </p>
                  </div>
                  <p className="main-content-p-3">
                    Bringing advanced IoT technology into everyday homes, making
                    automation simple and affordable
                  </p>
                </div>
                <div className="mission-content-container">
                  <div className="mission-content-container-1">
                    <p className="main-content-p">02</p>
                    <p className="main-content-heading">
                      Empowering Homeowners
                    </p>
                  </div>

                  <p className="main-content-p-3">
                    Providing intuitive solutions for seamless control through
                    mobile apps, voice commands, and remote access
                  </p>
                </div>
              </div>
              <div>
                <div className="mission-content-container">
                  <div className="mission-content-container-1">
                    <p className="main-content-p">03</p>
                    <p className="main-content-heading">
                      Affordable & Secure Solutions
                    </p>
                  </div>

                  <p className="main-content-p-3">
                    Offering reliable, secure, and cost-effective automation
                    designed for Indian households.
                  </p>
                </div>
                <div className="mission-content-container  no-border">
                  <div className="mission-content-container-1">
                    <p className="main-content-p">04</p>
                    <p className="main-content-heading">
                      Enhancing Your Daily Life
                    </p>
                  </div>
                  <p className="main-content-p-3">
                    Elevating comfort, convenience, and security with smart
                    products that make life easier and more efficient.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="mission-content-container">
                <div className="mission-content-container-1">
                  <p className="main-content-p">01</p>
                  <p className="main-content-heading">
                    Accessible Smart Living
                  </p>
                </div>
                <p className="main-content-p-3">
                  Bringing advanced IoT technology into everyday homes, making
                  automation simple and affordable
                </p>
              </div>
              <div className="mission-content-container">
                <div className="mission-content-container-1">
                  <p className="main-content-p">02</p>
                  <p className="main-content-heading">Empowering Homeowners</p>
                </div>

                <p className="main-content-p-3">
                  Providing intuitive solutions for seamless control through
                  mobile apps, voice commands, and remote access
                </p>
              </div>

              <div className="mission-content-container">
                <div className="mission-content-container-1">
                  <p className="main-content-p">03</p>
                  <p className="main-content-heading">
                    Affordable & Secure Solutions
                  </p>
                </div>

                <p className="main-content-p-3">
                  Offering reliable, secure, and cost-effective automation
                  designed for Indian households.
                </p>
              </div>
              <div className="mission-content-container  no-border">
                <div className="mission-content-container-1">
                  <p className="main-content-p">04</p>
                  <p className="main-content-heading">
                    Enhancing Your Daily Life
                  </p>
                </div>
                <p className="main-content-p-3">
                  Elevating comfort, convenience, and security with smart
                  products that make life easier and more efficient.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="join-us-container">
        <div className="join-us-parent">
          <div className="join-us">Join us</div>
          <div className="be-a-part">
            Be a part of the smart living revolution with Effortless Automation.
            Together, we can create a future where technology enhances the
            comfort, convenience, and security of your home.
          </div>
        </div>
        <Link to="/contact">
          <button className="AU-contact-us">
            <div className="AU-contact">Contact </div>
          </button>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default AboutUs;
