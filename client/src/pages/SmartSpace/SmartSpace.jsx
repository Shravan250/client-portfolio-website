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
  bangalow,
  livingRoom,
  smartSpaceImg,
} from "../../assets/SmartSpace/index";
import debounce from "lodash.debounce";
import {
  dayToEvening,
  dayToNight,
  eveningToNight,
  eveningToDay,
  lightControl,
  nightToDay,
  nightToEvening,
  TV,
  outdoorDayToNight,
  outdoorNightToDay,
  outdoorLight,
} from "../../video/index";

const SmartSpace = () => {
  const [activeScene, setActiveScene] = useState("indoor");
  const [value, setValue] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [activeButton, setActiveButton] = useState("sun");
  const [prevButton, setPrevButton] = useState(null);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleSwitch = (scene) => {
    setActiveScene(scene);
    setActiveButton("sun");
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      const width = window.innerWidth;
      setIsMobile(width <= 450);
      setIsTablet(width > 450 && width <= 850);
    }, 300);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleButtonClick = (buttonName) => {
    setPrevButton(activeButton);
    setActiveButton(buttonName);
  };

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    const videoMapping = {
      sun:
        activeScene === "outdoor"
          ? outdoorNightToDay
          : prevButton === "night"
          ? nightToDay
          : prevButton === "evening"
          ? eveningToDay
          : eveningToDay,
      evening:
        prevButton === "sun"
          ? dayToEvening
          : prevButton === "night"
          ? nightToEvening
          : dayToEvening,
      night:
        activeScene === "outdoor"
          ? outdoorDayToNight
          : prevButton === "evening"
          ? eveningToNight
          : prevButton === "sun"
          ? dayToNight
          : dayToNight,
      tv: TV,
      light: activeScene === "outdoor" ? outdoorLight : lightControl,
    };

    const videoElement = document.getElementById("smartspace-video");

    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
      setTimeout(() => {
        setCurrentVideo(videoMapping[activeButton]);
        videoElement.load();
        videoElement.play();
      }, 100);
    } else {
      setCurrentVideo(videoMapping[activeButton]);
    }

    setPrevButton(activeButton);
  }, [activeButton, activeScene]);

  useEffect(() => {
    if (activeButton === "light") {
      const videoElement = document.getElementById("smartspace-video");

      if (videoElement) {
        const targetTime = (value / 100) * videoDuration;
        videoElement.currentTime = targetTime;
        videoElement.pause();
      }
    }
  }, [value, videoDuration, activeButton]);

  useEffect(() => {
    const videoElement = document.getElementById("smartspace-video");

    const handleLoadedMetadata = () => {
      setVideoDuration(videoElement.duration || 0);
    };

    if (videoElement) {
      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.load();
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, [currentVideo]);

  return (
    <>
      {!isMobile ? (
        <div>
          <div className="btn-switch">
            <div
              className={`ss-switch-btn ${
                activeScene === "indoor" ? "active" : ""
              }`}
              onClick={() => handleSwitch("indoor")}
            >
              <div className="ss-switch-btn-content">
                <img src={livingRoom} alt="Indoor" />
                <p>Indoor Scene</p>
              </div>
            </div>
            <div
              className={`ss-switch-btn ${
                activeScene === "outdoor" ? "active" : ""
              }`}
              onClick={() => handleSwitch("outdoor")}
            >
              <div className="ss-switch-btn-content">
                <img src={bangalow} alt="Outdoor" />
                <p>Outdoor Scene</p>
              </div>
            </div>
          </div>
          {activeScene === "indoor" && (
            <div className="smart-space-container">
              {isTablet ? (
                <>
                  <div className="SS-controller-container">
                    <div className="SS-text-content">
                      <div className="SS-text-heading">
                        <p>
                          Interact with <span>Smart Home!</span>
                        </p>
                      </div>
                      <div className="SS-text-desc">
                        Click on the buttons on switchboard to view home
                        automation experience.
                      </div>
                    </div>
                    <div className="tv-SS-header-container">
                      <div className="SS-switchboard">
                        <div
                          className="SS-switchboard-left"
                          onClick={toggleTheme}
                        >
                          <img src={leftArrow} />
                        </div>
                        <div
                          className="SS-switchboard-buttons-container"
                          style={{
                            background: `url(${
                              isLightTheme ? lightBg : brownBg
                            })`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="SS-btns-container">
                            <button
                              className={
                                activeButton === "sun"
                                  ? "switchboard-btn-active"
                                  : ""
                              }
                              onClick={() => handleButtonClick("sun")}
                            >
                              <img
                                className="SS-btn-image"
                                src={sun}
                                alt="Sun"
                              />
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
                                activeButton === "night"
                                  ? "switchboard-btn-active"
                                  : ""
                              }
                              onClick={() => handleButtonClick("night")}
                            >
                              <img
                                className="SS-btn-image"
                                src={night}
                                alt="Night"
                              />
                            </button>
                            <button
                              className={
                                activeButton === "tv"
                                  ? "switchboard-btn-active"
                                  : ""
                              }
                              onClick={() => handleButtonClick("tv")}
                            >
                              <img className="SS-btn-image" src={tv} alt="TV" />
                            </button>
                            <button
                              className={
                                activeButton === "light"
                                  ? "switchboard-btn-active"
                                  : ""
                              }
                              onClick={() => handleButtonClick("light")}
                            >
                              <img
                                className="SS-btn-image"
                                src={light}
                                alt="Light"
                              />
                            </button>
                          </div>
                          <img
                            className="SS-switchboard-socket"
                            src={isLightTheme ? socket : socketBrown}
                          />
                        </div>
                        <div
                          className="SS-switchboard-right"
                          onClick={toggleTheme}
                        >
                          <img src={leftArrow} />
                        </div>
                      </div>
                      {activeButton === "light" && (
                        <div className="SS-slider-container">
                          <div className="SS-slider-heading">
                            Change light color
                          </div>
                          <div className="SS-slider">
                            <img
                              className="SS-slider-range-image"
                              src={range}
                            />
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
                  {currentVideo && (
                    <video id="smartspace-video" className="video" autoPlay>
                      <source src={currentVideo} type="video/mp4" />
                    </video>
                  )}
                </>
              ) : (
                <>
                  <div className="SS-controller-container-DV">
                    <div className="SS-text-heading">
                      <p>
                        Interact with <span>Smart Home!</span>
                      </p>
                    </div>

                    <div className="SS-Desktop-View">
                      <div className="SS-Desktop-View-Child">
                        <div className="SS-text-desc-DV">
                          Click on the buttons on switchboard to view home
                          automation experience.
                        </div>
                        <div className="tv-SS-header-container-DV">
                          <div className="SS-switchboard-DV">
                            <div
                              className="SS-switchboard-left"
                              onClick={toggleTheme}
                            >
                              <img src={leftArrow} />
                            </div>
                            <div
                              className="SS-switchboard-buttons-container"
                              style={{
                                background: `url(${
                                  isLightTheme ? lightBg : brownBg
                                })`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                              }}
                            >
                              <div className="SS-btns-container SS-btns-container-DV">
                                <button
                                  className={
                                    activeButton === "sun"
                                      ? "switchboard-btn-active"
                                      : ""
                                  }
                                  onClick={() => handleButtonClick("sun")}
                                >
                                  <img
                                    className="SS-btn-image-DV"
                                    src={sun}
                                    alt="Sun"
                                  />
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
                                    className="SS-btn-image-DV"
                                    src={evening}
                                    alt="Evening"
                                  />
                                </button>
                                <button
                                  className={
                                    activeButton === "night"
                                      ? "switchboard-btn-active"
                                      : ""
                                  }
                                  onClick={() => handleButtonClick("night")}
                                >
                                  <img
                                    className="SS-btn-image-DV"
                                    src={night}
                                    alt="Night"
                                  />
                                </button>
                                <button
                                  className={
                                    activeButton === "tv"
                                      ? "switchboard-btn-active"
                                      : ""
                                  }
                                  onClick={() => handleButtonClick("tv")}
                                >
                                  <img
                                    className="SS-btn-image-DV"
                                    src={tv}
                                    alt="TV"
                                  />
                                </button>
                                <button
                                  className={
                                    activeButton === "light"
                                      ? "switchboard-btn-active"
                                      : ""
                                  }
                                  onClick={() => handleButtonClick("light")}
                                >
                                  <img
                                    className="SS-btn-image-DV"
                                    src={light}
                                    alt="Light"
                                  />
                                </button>
                              </div>
                              <img
                                className="SS-switchboard-socket"
                                src={isLightTheme ? socket : socketBrown}
                              />
                            </div>
                            <div
                              className="SS-switchboard-right"
                              onClick={toggleTheme}
                            >
                              <img src={leftArrow} />
                            </div>
                          </div>
                          {activeButton === "light" && (
                            <div className="slider-container-DV">
                              <div className="SS-slider-heading mb-10">
                                Change light color
                              </div>
                              <div className="slider-wrapper-DV">
                                <div className="slider-ticks-DV">
                                  <span className="slider-tick-DV"></span>
                                  <span className="slider-tick-DV"></span>
                                  <span className="slider-tick-DV"></span>
                                  <span className="slider-tick-DV"></span>
                                  <span className="slider-tick-DV"></span>
                                  <span className="slider-tick-DV"></span>
                                </div>

                                <input
                                  type="range"
                                  min="0"
                                  max="100"
                                  value={value}
                                  onChange={handleChange}
                                  className="vertical-slider-DV"
                                  orient="vertical"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        {currentVideo && (
                          <video
                            id="smartspace-video"
                            className="video-DV"
                            autoPlay
                          >
                            <source src={currentVideo} type="video/mp4" />
                          </video>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {activeScene === "outdoor" && (
            <div className="smart-space-container">
              {isTablet ? (
                <>
                  <div className="SS-controller-container">
                    <div className="SS-text-content">
                      <div className="SS-text-heading">
                        <p>
                          Interact with <span>Smart Home!</span>
                        </p>
                      </div>
                      <div className="SS-text-desc">
                        Click on the buttons on switchboard to view home
                        automation experience.
                      </div>
                    </div>
                    <div className="tv-SS-header-container">
                      <div className="SS-switchboard">
                        <div
                          className="SS-switchboard-left"
                          onClick={toggleTheme}
                        >
                          <img src={leftArrow} />
                        </div>
                        <div
                          className="SS-switchboard-buttons-container"
                          style={{
                            background: `url(${
                              isLightTheme ? lightBg : brownBg
                            })`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="SS-btns-container-outdoor">
                            <button
                              className={
                                activeButton === "sun"
                                  ? "switchboard-btn-active"
                                  : ""
                              }
                              onClick={() => handleButtonClick("sun")}
                            >
                              <img
                                className="SS-btn-image"
                                src={sun}
                                alt="Sun"
                              />
                            </button>
                            <button
                              className={
                                activeButton === "night"
                                  ? "switchboard-btn-active"
                                  : ""
                              }
                              onClick={() => handleButtonClick("night")}
                            >
                              <img
                                className="SS-btn-image"
                                src={night}
                                alt="Night"
                              />
                            </button>
                            <button
                              className={
                                activeButton === "light"
                                  ? "switchboard-btn-active"
                                  : ""
                              }
                              onClick={() => handleButtonClick("light")}
                            >
                              <img
                                className="SS-btn-image"
                                src={light}
                                alt="Light"
                              />
                            </button>
                          </div>
                          <img
                            className="SS-switchboard-socket"
                            src={isLightTheme ? socket : socketBrown}
                          />
                        </div>
                        <div
                          className="SS-switchboard-right"
                          onClick={toggleTheme}
                        >
                          <img src={leftArrow} />
                        </div>
                      </div>
                      {activeButton === "light" && (
                        <div className="SS-slider-container">
                          <div className="SS-slider-heading">
                            Change light color
                          </div>
                          <div className="SS-slider">
                            <img
                              className="SS-slider-range-image"
                              src={range}
                            />
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
                  {currentVideo && (
                    <video id="smartspace-video" className="video" autoPlay>
                      <source src={currentVideo} type="video/mp4" />
                    </video>
                  )}
                </>
              ) : (
                <>
                  <div className="SS-controller-container-DV">
                    <div className="SS-text-heading">
                      <p>
                        Interact with <span>Smart Home!</span>
                      </p>
                    </div>

                    <div className="SS-Desktop-View">
                      <div className="SS-Desktop-View-Child">
                        <div className="SS-text-desc-DV">
                          Click on the buttons on switchboard to view home
                          automation experience.
                        </div>
                        <div className="tv-SS-header-container-DV">
                          <div className="SS-switchboard-DV">
                            <div
                              className="SS-switchboard-left"
                              onClick={toggleTheme}
                            >
                              <img src={leftArrow} />
                            </div>
                            <div
                              className="SS-switchboard-buttons-container"
                              style={{
                                background: `url(${
                                  isLightTheme ? lightBg : brownBg
                                })`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                              }}
                            >
                              <div className="SS-btns-container-DV SS-btns-container-outdoor">
                                <button
                                  className={
                                    activeButton === "sun"
                                      ? "switchboard-btn-active"
                                      : ""
                                  }
                                  onClick={() => handleButtonClick("sun")}
                                >
                                  <img
                                    className="SS-btn-image-DV"
                                    src={sun}
                                    alt="Sun"
                                  />
                                </button>

                                <button
                                  className={
                                    activeButton === "night"
                                      ? "switchboard-btn-active"
                                      : ""
                                  }
                                  onClick={() => handleButtonClick("night")}
                                >
                                  <img
                                    className="SS-btn-image-DV"
                                    src={night}
                                    alt="Night"
                                  />
                                </button>

                                <button
                                  className={
                                    activeButton === "light"
                                      ? "switchboard-btn-active"
                                      : ""
                                  }
                                  onClick={() => handleButtonClick("light")}
                                >
                                  <img
                                    className="SS-btn-image-DV"
                                    src={light}
                                    alt="Light"
                                  />
                                </button>
                              </div>
                              <img
                                className="SS-switchboard-socket"
                                src={isLightTheme ? socket : socketBrown}
                              />
                            </div>
                            <div
                              className="SS-switchboard-right"
                              onClick={toggleTheme}
                            >
                              <img src={leftArrow} />
                            </div>
                          </div>
                          {activeButton === "light" && (
                            <div className="slider-container-DV">
                              <div className="SS-slider-heading mb-10">
                                Change light color
                              </div>
                              <div className="slider-wrapper-DV">
                                <div className="slider-ticks-DV">
                                  <span className="slider-tick-DV"></span>
                                  <span className="slider-tick-DV"></span>
                                  <span className="slider-tick-DV"></span>
                                  <span className="slider-tick-DV"></span>
                                  <span className="slider-tick-DV"></span>
                                  <span className="slider-tick-DV"></span>
                                </div>

                                <input
                                  type="range"
                                  min="0"
                                  max="100"
                                  value={value}
                                  onChange={handleChange}
                                  className="vertical-slider-DV"
                                  orient="vertical"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        {currentVideo && (
                          <video
                            id="smartspace-video"
                            className="video-DV"
                            autoPlay
                          >
                            <source src={currentVideo} type="video/mp4" />
                          </video>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="btn-switch">
            <div
              className={`ss-switch-btn ${
                activeScene === "indoor" ? "active" : ""
              }`}
              onClick={() => handleSwitch("indoor")}
            >
              <div className="ss-switch-btn-content">
                <img src={livingRoom} alt="Indoor" />
                <p>Indoor Scene</p>
              </div>
            </div>
            <div
              className={`ss-switch-btn ${
                activeScene === "outdoor" ? "active" : ""
              }`}
              onClick={() => handleSwitch("outdoor")}
            >
              <div className="ss-switch-btn-content">
                <img src={bangalow} alt="Outdoor" />
                <p>Outdoor Scene</p>
              </div>
            </div>
          </div>

          {activeScene === "indoor" && (
            <div className="smart-space-container">
              <div className="SS-controller-container">
                <div className="SS-text-content">
                  <div className="SS-text-heading">
                    <p>
                      Interact with <span>Smart Home!</span>
                    </p>
                  </div>
                  <div className="SS-text-desc">
                    Click on the buttons on switchboard to view home automation
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
                            activeButton === "sun"
                              ? "switchboard-btn-active"
                              : ""
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
                            activeButton === "night"
                              ? "switchboard-btn-active"
                              : ""
                          }
                          onClick={() => handleButtonClick("night")}
                        >
                          <img
                            className="SS-btn-image"
                            src={night}
                            alt="Night"
                          />
                        </button>
                        <button
                          className={
                            activeButton === "tv"
                              ? "switchboard-btn-active"
                              : ""
                          }
                          onClick={() => handleButtonClick("tv")}
                        >
                          <img className="SS-btn-image" src={tv} alt="TV" />
                        </button>
                        <button
                          className={
                            activeButton === "light"
                              ? "switchboard-btn-active"
                              : ""
                          }
                          onClick={() => handleButtonClick("light")}
                        >
                          <img
                            className="SS-btn-image"
                            src={light}
                            alt="Light"
                          />
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
              {currentVideo && (
                <video id="smartspace-video" className="video" autoPlay>
                  <source src={currentVideo} type="video/mp4" />
                </video>
              )}

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
          {activeScene === "outdoor" && (
            <div className="smart-space-container">
              <div className="SS-controller-container">
                <div className="SS-text-content">
                  <div className="SS-text-heading">
                    <p>
                      Interact with <span>Smart Home!</span>
                    </p>
                  </div>
                  <div className="SS-text-desc">
                    Click on the buttons on switchboard to view home automation
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
                      <div className="SS-btns-container-outdoor">
                        <button
                          className={
                            activeButton === "sun"
                              ? "switchboard-btn-active"
                              : ""
                          }
                          onClick={() => handleButtonClick("sun")}
                        >
                          <img className="SS-btn-image" src={sun} alt="Sun" />
                        </button>

                        <button
                          className={
                            activeButton === "night"
                              ? "switchboard-btn-active"
                              : ""
                          }
                          onClick={() => handleButtonClick("night")}
                        >
                          <img
                            className="SS-btn-image"
                            src={night}
                            alt="Night"
                          />
                        </button>

                        <button
                          className={
                            activeButton === "light"
                              ? "switchboard-btn-active"
                              : ""
                          }
                          onClick={() => handleButtonClick("light")}
                        >
                          <img
                            className="SS-btn-image"
                            src={light}
                            alt="Light"
                          />
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
              {currentVideo && (
                <video id="smartspace-video" className="video" autoPlay>
                  <source src={currentVideo} type="video/mp4" />
                </video>
              )}

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
        </div>
      )}
    </>
  );
};

export default SmartSpace;
