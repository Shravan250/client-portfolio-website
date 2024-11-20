import React, { useEffect, useState } from "react";
import "./SolutionSection.css";

const SolutionsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="solutions-container">
      {!isMobile ? (
        <>
          <div className="our-solutions-parent">
            <div className="our-solutions">Our Solutions</div>
            <div className="elevate-your-home">
              Elevate Your Home with Smart Technology
            </div>
          </div>
          <div className="modular-design-means-easy-part-parent">
            <p className="modular-design-means">
              Modular design means easy part replacement, saving you up to
              <span className="span-90"> 90% </span>on setup costs.
            </p>
            <div className="three-modular-design">
              <div className="title-modular-design-parent">
                <div className="title-modular-design">IoT Solutions</div>
                <div className="points-oem-container">
                  <p className="points">Back-End Infrastructure</p>
                  <p className="points">OEM IoT Apps Development</p>
                  <p className="points">IoT Cloud Solutions</p>
                  <p className="points">Cloud Development</p>
                </div>
              </div>
              <div className="hardware-design-parent">
                <div className="title-modular-design">Hardware Design</div>
                <div className="points-oem-container">
                  <p className="points">Electronic Circuit Design</p>
                  <p className="points">PCB Design & Development</p>
                  <p className="points">Enclosure Design</p>
                  <p className="points">3D Design & Printing</p>
                  <p className="points">Sample Fabrication</p>
                </div>
              </div>
              <div className="embedded-software-parent">
                <div className="title-modular-design">Embedded Software</div>
                <div className="points-oem-container">
                  <div className="points">Custom Firmware Development</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mv-our-solutions-parent">
            <div className="our-solutions">Our Solutions</div>
            <div className="elevate-your-home">
              Elevate Your Home with Smart Technology
            </div>
          </div>
          <div className="mv-modular-design-means-easy-part-parent"></div>
        </>
      )}
    </div>
  );
};

export default SolutionsSection;
