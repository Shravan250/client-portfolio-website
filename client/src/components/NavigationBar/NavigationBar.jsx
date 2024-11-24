import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";
import logo from "../../assets/LandingPage/Navigation/EAbrown trademark logo on white 1.svg";
import arrow from "../../assets/LandingPage/Navigation/Arrow down-left.svg";
import menu from "../../assets/LandingPage/Navigation/Menu.svg";
import mobileLogo from "../../assets/LandingPage/Navigation/mobile-screen-logo.png";
import mobileCross from "../../assets/LandingPage/Navigation/Icon.svg";

function NavigationBar() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = location.pathname;

  const displayNames = {
    "/products": "Products",
    "/single-product": "Product Details",
    "/terms-and-conditions": "Terms & Conditions",
    "/refund-cancellation-policy": "Cancellation & Refund Policy",
    "/faq": "FAQ",
    "/privacy-policy": "Privacy Policy",
    "/about-us": "About Us",
    "/smart-space": "Smart Space",
  };

  const displayName = displayNames[path] || null;

  useEffect(() => {
    if (isMobile && !isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobile, isMenuOpen]);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navigation-bar">
      {!isMobile ? (
        <div className="nav-child">
          <Link to="/">
            <img className="logo-nav" alt="logo" src={logo} />
          </Link>
          <div className="tab-parent">
            <Link to="/">
              <button
                className={`home ${location.pathname === "/" ? "active" : ""}`}
              >
                <p>Home</p>
                {location.pathname === "/" && <span className="dot"></span>}
              </button>
            </Link>
            <Link to="/products">
              <button
                className={`product ${
                  location.pathname === "/products" ? "active" : ""
                }`}
              >
                <p>Products</p>
                {location.pathname === "/products" && (
                  <span className="dot"></span>
                )}
              </button>
            </Link>
            <Link to="/smart-space">
              <button
                className={`smart-space ${
                  location.pathname === "/smart-space" ? "active" : ""
                }`}
              >
                <p>Smart Space</p>
                {location.pathname === "/smart-space" && (
                  <span className="dot"></span>
                )}
              </button>
            </Link>
            <Link to="/about-us">
              <button
                className={`about-us ${
                  location.pathname === "/about-us" ? "active" : ""
                }`}
              >
                <p>About Us</p>
                {location.pathname === "/about-us" && (
                  <span className="dot"></span>
                )}
              </button>
            </Link>
          </div>
          <div className="nav-contact-btn">
            <Link to="/contact">
              <button
                className={`contact-us-nav ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <p className="contact-p">Contact</p>
                <img
                  className="contact-hover-state"
                  src={arrow}
                  alt="Hover Icon"
                />
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="nav-child">
            <Link to="/">
              <img className="logo-nav" alt="logo" src={mobileLogo} />
            </Link>
            {displayName && <p className="mv-nav-title">{displayName}</p>}
            <img
              src={isMenuOpen ? mobileCross : menu}
              className="menu-icon"
              onClick={toggleNavbar}
              alt="menu"
            />
          </div>
          {isMenuOpen && (
            <div className="mv-navbar-background">
              <div
                className={`mv-navbar-contents  ${isMenuOpen ? "open" : ""}`}
              >
                <Link to="/">
                  <button
                    className={`mv-btns ${
                      location.pathname === "/" ? "mv-active" : ""
                    }`}
                  >
                    Home
                  </button>
                </Link>
                <Link to="/products">
                  <button
                    className={`mv-btns ${
                      location.pathname === "/products" ? "mv-active" : ""
                    }`}
                  >
                    Products
                  </button>
                </Link>
                <Link to="/smart-space">
                  <button
                    className={`mv-btns ${
                      location.pathname === "/smart-space" ? "mv-active" : ""
                    }`}
                  >
                    Smart Space
                  </button>
                </Link>
                <Link to="/about-us">
                  <button
                    className={`mv-btns ${
                      location.pathname === "/about-us" ? "mv-active" : ""
                    }`}
                  >
                    About Us
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default NavigationBar;
