import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import {
  up,
  down,
  legalContract,
  questionMark,
  badge,
  plus,
  tick,
  cross,
} from "../../assets/SingleProduct/index";
import productData from "../../../ProductData/productData";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  const { productIndex } = location.state || {};
  const [isHowItWorksVisible, setHowItWorksVisible] = useState(false);
  const [isLegalDisclaimerVisible, setLegalDisclaimerVisible] = useState(false);

  const toggleHowItWorks = () => {
    setHowItWorksVisible(!isHowItWorksVisible);
  };

  const toggleLegalDisclaimer = () => {
    setLegalDisclaimerVisible(!isLegalDisclaimerVisible);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("singleProductVisited")) {
      sessionStorage.setItem("singleProductVisited", "true");
      window.location.reload();
    }
  }, []);

  if (
    productIndex === undefined ||
    productIndex < 0 ||
    productIndex >= productData.length
  ) {
    return <div>Product not found</div>;
  }

  const currentProduct = productData[productIndex];

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [inquiryRaised, setInquiryRaised] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mainImage, setMainImage] = useState(currentProduct?.imageSrc?.[0]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 390);
      setIsTablet(width > 390 && width <= 850);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInquiryClick = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsPopupVisible(false);
    }
  };

  const handleDoneClick = () => {
    setIsPopupVisible(false);
    setInquiryRaised(true);
  };

  const ProductCard = ({ name, originalPrice, discountedPrice, imageSrc }) => (
    <div className="image-container">
      <img className="image-icon" alt={name} src={imageSrc} />
      <div className="switch-control-10-amp-each-group">
        <div className="switch-control-101">{name}</div>
        <div className="SP-price-div">
          <span>
            <span className="span">{originalPrice}</span>
          </span>
          <span className="span1">{discountedPrice}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="desktop-product-page">
        <div className="SP-selected-product-container">
          <div className="tv-left-placement">
            <div className="SP-image-parent">
              <img className="SP-image-icon" alt src={mainImage} />

              <div className="image-group">
                {currentProduct?.imageSrc
                  ?.slice(0, isMobile ? 4 : 5)
                  .map((image, index) => (
                    <img
                      key={index}
                      className="SP-image-icon1"
                      src={image}
                      onClick={() => setMainImage(image)}
                      alt={`Product thumbnail ${index + 1}`}
                    />
                  ))}

                {currentProduct?.imageSrc?.length > (isMobile ? 4 : 5) && (
                  <div className="image-group-more-wrapper">
                    <p className="image-group-more">
                      +{currentProduct.imageSrc.length - (isMobile ? 4 : 5)}{" "}
                      more
                    </p>
                  </div>
                )}
              </div>
            </div>
            {isTablet && (
              <div className="upgrade-your-home">
                Upgrade your home effortlessly with this 4-switch control kit.
                Easily installed behind your existing switchboard, it requires
                no additional wiring or wall damage. Control your appliances
                like lights, fans, ACs, and coolers through your mobile phone,
                remote, or voice commands via Alexa—all from the comfort of your
                sofa or bed.
              </div>
            )}
          </div>
          <div className="SP-selected-product-info-container">
            <div className="selected-product-info-brief">
              {!isTablet ? (
                <>
                  {" "}
                  <div className="switch-control-10-amp-each-parent">
                    <p className="SP-how-it-works-title">
                      {currentProduct?.name || "Product Name"}
                    </p>
                    <div className="SP-div">
                      <span>
                        <span className="SP-original-price-span">
                          {currentProduct?.originalPrice || "₹0.00"}
                        </span>
                      </span>
                      <span className="SP-discounted-price-span">
                        {currentProduct?.discountedPrice || "₹0.00"}
                      </span>
                    </div>
                  </div>
                  <img className="image-336-icon" alt src={badge} />
                  {inquiryRaised ? (
                    <div
                      className="inquiry raised-inquiry-container"
                      id="inquiryContainer"
                    >
                      <img className="tick-icon" alt="" src={tick} />
                      <div className="raised-inquiry">Raised Inquiry</div>
                    </div>
                  ) : (
                    <div className="inquiry" id="inquiryContainer">
                      <img className="SP-plus-icon" alt src={plus} />
                      <div
                        className="raise-inquiry"
                        onClick={handleInquiryClick}
                      >
                        Raise Inquiry
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="switch-control-10-amp-each-parent">
                    <p className="SP-how-it-works-title">
                      {currentProduct?.name || "Product Name"}
                    </p>
                    <div className="SP-div">
                      <span>
                        <span className="SP-original-price-span">
                          {currentProduct?.originalPrice || "₹0.00"}
                        </span>
                      </span>
                      <span className="SP-discounted-price-span">
                        {currentProduct?.discountedPrice || "₹0.00"}
                      </span>
                    </div>
                  </div>
                  <div className="tv-SP-row">
                    <img className="image-336-icon" alt src={badge} />

                    {inquiryRaised ? (
                      <div
                        className="inquiry raised-inquiry-container"
                        id="inquiryContainer"
                      >
                        <img className="tick-icon" alt="" src={tick} />
                        <div className="raised-inquiry">Raised Inquiry</div>
                      </div>
                    ) : (
                      <div className="inquiry" id="inquiryContainer">
                        <img className="SP-plus-icon" alt src={plus} />
                        <div
                          className="raise-inquiry"
                          onClick={handleInquiryClick}
                        >
                          Raise Inquiry
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="selected-product-info-div">
              <div className="upgrade-your-home-effortlessly-parent">
                {!isTablet && (
                  <div className="upgrade-your-home">
                    Upgrade your home effortlessly with this 4-switch control
                    kit. Easily installed behind your existing switchboard, it
                    requires no additional wiring or wall damage. Control your
                    appliances like lights, fans, ACs, and coolers through your
                    mobile phone, remote, or voice commands via Alexa—all from
                    the comfort of your sofa or bed.
                  </div>
                )}
                <div className="SP-SP-frame-parent1">
                  <div className="features-parent">
                    <div className="features">Features:</div>
                    <div className="no-extra-wiring-container">
                      <ul className="no-extra-wiring-or-wall-damage">
                        <li className="no-extra-wiring">
                          No extra wiring or wall damage
                        </li>
                        <li className="no-extra-wiring">
                          Mobile, remote, and voice control (Alexa)
                        </li>
                        <li className="no-extra-wiring">
                          Supports lights, fans, ACs, coolers, and more
                        </li>
                        <li>Installation support available via call</li>
                      </ul>
                    </div>
                  </div>
                  <div className="features-parent">
                    <div className="features">Kit Includes:</div>
                    <div className="no-extra-wiring-container">
                      <ul className="no-extra-wiring-or-wall-damage">
                        <li className="no-extra-wiring">
                          Eco-4N Controller (60mm x 55mm x 21mm)
                        </li>
                        <li>User manual & warranty card</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="SP-frame-parent2">
                <div className="SP-frame-parent4">
                  <div className="SP-frame-parent5" onClick={toggleHowItWorks}>
                    <div className="question-mark-parent">
                      <img
                        className="question-mark-icon"
                        alt
                        src={questionMark}
                      />

                      <div className="SP-how-it-works">How it works?</div>
                    </div>
                    <img
                      className="chevron-right-icon"
                      alt
                      src={isHowItWorksVisible ? up : down}
                    />
                  </div>
                  {isHowItWorksVisible && (
                    <div className="it-will-be-installed-behind-yo-wrapper">
                      <div className="SP-info-upgrade-your-home">
                        It will be installed behind your existing switchboard,
                        it doesn't require any additional wiring & physical
                        damage of wall. It gives you power to control all your
                        household appliances like Light, Fan, AC, Cooler, etc.,
                        through your Mobile phone, Remote, and even with your
                        voice via Alexa/Google Home, while seated on Sofa or
                        Bed.
                      </div>
                    </div>
                  )}
                </div>
                <div className="SP-frame-parent4">
                  <div
                    className="SP-frame-parent5"
                    onClick={toggleLegalDisclaimer}
                  >
                    <div className="question-mark-parent">
                      <img
                        className="question-mark-icon"
                        alt
                        src={legalContract}
                      />

                      <div className="SP-how-it-works">Legal Disclaimer</div>
                    </div>
                    <img
                      className="chevron-right-icon"
                      alt
                      src={isLegalDisclaimerVisible ? up : down}
                    />
                  </div>
                  {isLegalDisclaimerVisible && (
                    <div className="it-will-be-installed-behind-yo-wrapper">
                      <div className="SP-info-upgrade-your-home">
                        All product information is provided in good faith. Usage
                        of this product should be in compliance with applicable
                        laws and regulations. The company holds no
                        responsibility for misuse or unintended usage of the
                        product.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-similar-parent">
          <div className="features">View similar</div>
          <div className="SP-frame-parent6">
            {/* Render Product Cards */}
            {productData.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                originalPrice={product.originalPrice}
                discountedPrice={product.discountedPrice}
                imageSrc={product.imageSrc[0]}
              />
            ))}
          </div>
        </div>

        {isPopupVisible && (
          <div
            id="enterMobileNo"
            className="popup-overlay"
            onClick={handlePopupClick}
          >
            <div className="enter-mobile-no">
              <div className="top">
                <div className="SP-frame-parent7">
                  <div
                    className="icon-wrapper"
                    onClick={() => setIsPopupVisible(false)}
                  >
                    <img className="icon" alt="" src={cross} />
                  </div>
                  <form className="SP-frame-parent8">
                    <div className="please-enter-your-mobile-numbe-parent">
                      <div className="please-enter-your">
                        Please enter your mobile number
                      </div>
                      <div
                        className={`SP-field ${
                          focusedField === "number" ? "input-focused" : ""
                        }`}
                      >
                        <label htmlFor="name" className="your-number">
                          Your Number
                        </label>
                        <input
                          id="name"
                          className="number-input"
                          onFocus={() => setFocusedField("number")}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                    <button
                      onClick={handleDoneClick}
                      className="SP-pw-web-buttons"
                      id="popuppWWebButtons"
                      type="submit"
                    >
                      <div className="instance-parent">
                        <p className="done">Done</p>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
