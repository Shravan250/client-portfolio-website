import React from "react";
import "./FeaturesGrid.css";
import {
  bell,
  fan,
  memoryCardSecurity,
  sofa,
  offline,
  schedule,
  share,
  rgb,
  update,
} from "../../assets/LandingPage/FeaturesGrid/index";

function FeatureCard({ image, title, description }) {
  return (
    <div className="feature-card">
      <img src={image} alt={title} className="feature-icon" />
      <div className="schedule-control-parent">
        <div className="schedule-control">{title}</div>
        <div className="easily-automate-devices">{description}</div>
      </div>
    </div>
  );
}

function FeaturesGrid() {
  const features = [
    {
      image: schedule,
      title: "Schedule Control",
      description: "Easily automate devices with scheduled routines",
    },
    {
      image: bell,
      title: "Live Notifications",
      description: "Stay informed with real-time device alerts",
    },
    {
      image: sofa,
      title: "Custom Scene",
      description: "Apply personalized room settings instantly",
    },
    {
      image: offline,
      title: "Offline Mode",
      description: "Control your devices even when offline",
    },
    {
      image: rgb,
      title: "RGB Control",
      description: "RGB control module can control any RGB strip",
    },
    {
      image: fan,
      title: "Fan Speed Control",
      description: "Get humming less 4 step fan control",
    },
    {
      image: memoryCardSecurity,
      title: "Memory Function",
      description: "Retains device settings after power restoration",
    },
    {
      image: share,
      title: "Share Feature",
      description: "Share app with friends to control together",
    },
    {
      image: update,
      title: "OTA Update",
      description: "Remotely upgrade firmware with ease",
    },
  ];

  return (
    <div className="features-grid">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          image={feature.image}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

export default FeaturesGrid;
