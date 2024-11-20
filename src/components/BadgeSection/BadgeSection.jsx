import React from "react";
import "./BadgeSection.css";
import image336 from "../../assets/LandingPage/Badge/image 336.png";
import Vector1842 from "../../assets/LandingPage/Badge/Vector 1842.svg";
import Vector1843 from "../../assets/LandingPage/Badge/Vector 1843.svg";
import image from "../../assets/LandingPage/Badge/image-removebg-preview (2) 1.png";

function BadgeSection() {
  return (
    <div className="badge-container">
      <img className="badge-line" alt src={Vector1842} />

      <img className="BS-image-336-icon" alt src={image336} />

      <img className="BS-image-removebg-preview-2-1" alt src={image} />

      <img className="badge-line" alt src={Vector1843} />
    </div>
  );
}

export default BadgeSection;
