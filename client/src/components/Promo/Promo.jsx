import React, { useEffect, useState } from "react";
import "./Promo.css";
import {
  image330,
  image331,
  image332,
  closeuphandholdingphone,
  imageremovebgpreview,
  tvImage,
  mobileImage,
} from "../../assets/LandingPage/Promo/index.js";
function AppPromo() {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 450);
      setIsTablet(width > 450 && width <= 850);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="apppromo-parent">
      <div className="close-up-hand-holding-phone-parent">
        <img
          className="close-up-hand-holding-phone-icon"
          alt
          src={
            isMobile
              ? mobileImage
              : isTablet
              ? tvImage
              : closeuphandholdingphone
          }
        />

        <img className="image-330-icon" alt src={image330} />
      </div>
      <div className="apppromo-frame-container">
        <div className="apppromo-frame-parent3">
          <div className="apppromo-frame-parent4">
            <div className="powered-by-parent">
              <div className="powered-by">Powered by</div>
              <img
                className="image-removebg-preview-1-1"
                alt
                src={imageremovebgpreview}
              />
            </div>
            <div className="control-your-home">
              Control your home from anywhere, at any time
            </div>
          </div>
          <div className="install-our-app-parent">
            <div className="install-our-app">Install our app:</div>
            <div className="apppromo-frame-parent5">
              <button className="image-331-wrapper">
                <img className="image-331-icon" alt src={image331} />
              </button>
              <button className="image-331-wrapper">
                <img className="image-332-icon" alt src={image332} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppPromo;
