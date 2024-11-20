import React from "react";
import "./VoiceControl.css";
import image from "../../assets/LandingPage/Voice/image.png";
import image328 from "../../assets/LandingPage/Voice/image 328.png";
import image329 from "../../assets/LandingPage/Voice/image 329.png";

function VoiceControlIntegration() {
  return (
    <div className="VC-image-parent">
      <img className="VC-image-icon1" alt src={image} />

      <div className="VC-title-parent">
        <div className="VC-title">
          <div className="VC-effortless">Effortless</div>
          <div className="voice-control-integration">
            Voice Control Integration
          </div>
        </div>
        <div className="VC-image-container">
          <div className="VC-image-328-wrapper">
            <img className="VC-image-328-icon" alt src={image328} />
          </div>
          <div className="VC-image-328-wrapper">
            <img className="VC-image-329-icon" alt src={image329} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoiceControlIntegration;
