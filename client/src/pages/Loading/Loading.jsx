import React, { useEffect, useState } from "react";
import "./Loading.css";
import { loadingScreen } from "../../video/index";

const Loading = ({ onLoadingComplete }) => {
  const [isFading, setIsFading] = useState(false);

  const handleVideoEnd = () => {
    setIsFading(true);
    setTimeout(() => {
      onLoadingComplete();
    }, 100);
  };

  return (
    <div className={`loading-container ${isFading ? "fade-out" : ""}`}>
      <video
        width="100%"
        height="auto"
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className="loading-video"
      >
        <source src={loadingScreen} type="video/mp4" />
      </video>
    </div>
  );
};

export default Loading;
