import React, { useEffect, useState } from "react";
import "./SmartSpace.css";
import {
  evening,
  leftArrow,
  light,
  night,
  tv,
  sun,
  socket,
  socketBrown,
  lightBg,
  brownBg,
  range,
  smartSpaceImg,
} from "../../assets/SmartSpace/index";
import debounce from "lodash.debounce";

const SmartSpace = () => {
  const [value, setValue] = useState(50);
  const [activeButton, setActiveButton] = useState("sun");
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 390);
    }, 300);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  return (
    <>
      {!isMobile ? (
        <div className="smart-space-container">
          <div className="SS-controller-container">
            <div className="SS-text-content">
              <div className="SS-text-heading">
                <p>Explore our</p>
                <span>Interactive Switchboard!</span>
              </div>
              <div className="SS-text-desc">
                Discover customizable scenes and redefine your home automation
                experience.
              </div>
            </div>
            <div className="tv-SS-header-container">
              <div className="SS-switchboard">
                <div className="SS-switchboard-left" onClick={toggleTheme}>
                  <img src={leftArrow} />
                </div>
                <div
                  className="SS-switchboard-buttons-container"
                  style={{
                    background: `url(${isLightTheme ? lightBg : brownBg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="SS-btns-container">
                    <button
                      className={
                        activeButton === "sun" ? "switchboard-btn-active" : ""
                      }
                      onClick={() => handleButtonClick("sun")}
                    >
                      <img className="SS-btn-image" src={sun} alt="Sun" />
                    </button>
                    <button
                      className={
                        activeButton === "evening"
                          ? "switchboard-btn-active"
                          : ""
                      }
                      onClick={() => handleButtonClick("evening")}
                    >
                      <img
                        className="SS-btn-image"
                        src={evening}
                        alt="Evening"
                      />
                    </button>
                    <button
                      className={
                        activeButton === "night" ? "switchboard-btn-active" : ""
                      }
                      onClick={() => handleButtonClick("night")}
                    >
                      <img className="SS-btn-image" src={night} alt="Night" />
                    </button>
                    <button
                      className={
                        activeButton === "tv" ? "switchboard-btn-active" : ""
                      }
                      onClick={() => handleButtonClick("tv")}
                    >
                      <img className="SS-btn-image" src={tv} alt="TV" />
                    </button>
                    <button
                      className={
                        activeButton === "light" ? "switchboard-btn-active" : ""
                      }
                      onClick={() => handleButtonClick("light")}
                    >
                      <img className="SS-btn-image" src={light} alt="Light" />
                    </button>
                  </div>
                  <img
                    className="SS-switchboard-socket"
                    src={isLightTheme ? socket : socketBrown}
                  />
                </div>
                <div className="SS-switchboard-right" onClick={toggleTheme}>
                  <img src={leftArrow} />
                </div>
              </div>
              {activeButton === "light" && (
                <div className="SS-slider-container">
                  <div className="SS-slider-heading">Change light color</div>
                  <div className="SS-slider">
                    <img className="SS-slider-range-image" src={range} />
                    <div className="SS-slider-sections">
                      <div className="SS-range-indicator"></div>
                      <div className="SS-range-indicator"></div>
                      <div className="SS-range-indicator"></div>
                      <div className="SS-range-indicator"></div>
                      <div className="SS-range-indicator"></div>
                      <div className="SS-range-indicator"></div>
                      <div className="SS-range-indicator"></div>
                      <div className="SS-range-indicator"></div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={value}
                      onChange={handleChange}
                      className="vertical-slider"
                      orient="vertical"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <img className="SS-image" src={smartSpaceImg} />
        </div>
      ) : (
        <div className="smart-space-container">
          <div className="SS-controller-container">
            <div className="SS-text-content">
              <div className="SS-text-heading">
                <p>Explore our</p>
                <span>Interactive Switchboard!</span>
              </div>
              <div className="SS-text-desc">
                Discover customizable scenes and redefine your home automation
                experience.
              </div>
            </div>
            <div className="tv-SS-header-container">
              <div className="SS-switchboard">
                <div className="SS-switchboard-left" onClick={toggleTheme}>
                  <img src={leftArrow} />
                </div>
                <div
                  className="SS-switchboard-buttons-container"
                  style={{
                    background: `url(${isLightTheme ? lightBg : brownBg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="SS-btns-container">
                    <button
                      className={
                        activeButton === "sun" ? "switchboard-btn-active" : ""
                      }
                      onClick={() => handleButtonClick("sun")}
                    >
                      <img className="SS-btn-image" src={sun} alt="Sun" />
                    </button>
                    <button
                      className={
                        activeButton === "evening"
                          ? "switchboard-btn-active"
                          : ""
                      }
                      onClick={() => handleButtonClick("evening")}
                    >
                      <img
                        className="SS-btn-image"
                        src={evening}
                        alt="Evening"
                      />
                    </button>
                    <button
                      className={
                        activeButton === "night" ? "switchboard-btn-active" : ""
                      }
                      onClick={() => handleButtonClick("night")}
                    >
                      <img className="SS-btn-image" src={night} alt="Night" />
                    </button>
                    <button
                      className={
                        activeButton === "tv" ? "switchboard-btn-active" : ""
                      }
                      onClick={() => handleButtonClick("tv")}
                    >
                      <img className="SS-btn-image" src={tv} alt="TV" />
                    </button>
                    <button
                      className={
                        activeButton === "light" ? "switchboard-btn-active" : ""
                      }
                      onClick={() => handleButtonClick("light")}
                    >
                      <img className="SS-btn-image" src={light} alt="Light" />
                    </button>
                  </div>
                  <img
                    className="SS-switchboard-socket"
                    src={isLightTheme ? socket : socketBrown}
                  />
                </div>
                <div className="SS-switchboard-right" onClick={toggleTheme}>
                  <img src={leftArrow} />
                </div>
              </div>
            </div>
          </div>
          <img className="SS-image" src={smartSpaceImg} />

          {activeButton === "light" && (
            <div className="SS-slider-container">
              <div className="SS-slider-heading">Change light color</div>
              <div className="SS-slider">
                <div className="gradient-bar"></div>
                <div className="SS-slider-sections">
                  <div className="SS-range-indicator"></div>
                  <div className="SS-range-indicator"></div>
                  <div className="SS-range-indicator"></div>
                  <div className="SS-range-indicator"></div>
                  <div className="SS-range-indicator"></div>
                  <div className="SS-range-indicator"></div>
                  <div className="SS-range-indicator"></div>
                  <div className="SS-range-indicator"></div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                  className="vertical-slider"
                  orient="vertical"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SmartSpace;
