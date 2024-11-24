import React from "react";
import "./SmartRemoteControl.css";
import buisnessman from "../../assets/LandingPage/SmartRemote/Businessman in grey vest sitting on exchange rate ornament with hand gesture ok finger.png";
import cableIcon from "../../assets/LandingPage/SmartRemote/Frame_1984077778-removebg-preview 1.png";
import remote from "../../assets/LandingPage/SmartRemote/remote 1.png";

function SmartRemoteControl() {
  return (
    <div className="SRC-container">
      <div className="remote-1-parent">
        <img className="remote-1-icon" alt src={remote} />

        <div className="hero-text-group">
          <div className="SRC-title-container">
            <div className="SRC-title-1">Smart</div>
            <div className="SRC-title-2">Remote Control</div>
          </div>
          <div className="SRC-points-container">
            <ul className="SRC-points-switches-ergono">
              <li className="SRC-points">Master Off All Switches</li>
              <li className="SRC-points">Ergonomic Design</li>
              <li className="SRC-points">RGB Strip Control</li>
              <li className="SRC-points">Humming Less FAN Speed Control</li>
              <li className="SRC-points">Smart Device Reset</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="SRC-btn-container">
        <div className="cable-icon-btn">
          <img className="cable-icon" alt src={cableIcon} />

          <div className="easy-to-install">
            Easy to install, no wiring needed
          </div>
        </div>
        <div className="businessman-in-grey-vest-sitti-parent">
          <img
            className="businessman-in-grey-vest-sitti"
            alt
            src={buisnessman}
          />

          <div className="businessman-in-grey-vest-sitti-powered-by">
            Budget-friendly prices
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureBox({ imgSrc, text }) {
  return (
    <div classNameName="feature-box">
      <img src={imgSrc} alt="Feature Icon" />
      <p>{text}</p>
    </div>
  );
}

export default SmartRemoteControl;
