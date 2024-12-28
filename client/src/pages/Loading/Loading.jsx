import React, { useEffect, useState } from "react";
import "./Loading.css";
import { loadingScreen } from "../../video/index";

const Loading = ({ onLoadingComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const gifDuration = 4500;
    const timeout = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 100);
    }, gifDuration);

    return () => clearTimeout(timeout);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-container ${isFading ? "fade-out" : ""}`}>
      <img src={loadingScreen} alt="Loading..." className="loading-gif" />
    </div>
  );
};

export default Loading;
