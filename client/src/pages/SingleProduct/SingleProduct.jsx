import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import debounce from "lodash.debounce";
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
import { useLocation, useParams } from "react-router-dom";
import API_URL from "../../../config/config";

const SingleProduct = () => {
  const location = useLocation();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState(null);
  const [isHowItWorksVisible, setHowItWorksVisible] = useState(false);
  const [isLegalDisclaimerVisible, setLegalDisclaimerVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [inquiryRaised, setInquiryRaised] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/api/products/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.statusText}`);
        }
        const product = await response.json();
        setCurrentProduct(product);
        console.log(product);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (currentProduct) {
      setMainImage(currentProduct?.imageSrc?.[0] || "");
    }
  }, [currentProduct]);

  useEffect(() => {
    const handleResize = debounce(() => {
      const width = window.innerWidth;
      setIsMobile(width <= 390);
      setIsTablet(width > 390 && width <= 850);
    }, 300);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!currentProduct)
    return <div className="no-product">Product not found.</div>;

  const toggleHowItWorks = () => {
    setHowItWorksVisible(!isHowItWorksVisible);
  };

  const toggleLegalDisclaimer = () => {
    setLegalDisclaimerVisible(!isLegalDisclaimerVisible);
  };

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
              <div className="upgrade-your-home">{currentProduct.desc}</div>
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
                  <div className="upgrade-your-home">{currentProduct.desc}</div>
                )}
                <div className="SP-SP-frame-parent1">
                  <div className="features-parent">
                    <div className="features">Features:</div>
                    <div className="no-extra-wiring-container">
                      <ul className="no-extra-wiring-or-wall-damage">
                        {currentProduct?.features?.map((feature, index) => (
                          <li key={index} className="no-extra-wiring">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="features-parent">
                    <div className="features">Kit Includes:</div>
                    <div className="no-extra-wiring-container">
                      <ul className="no-extra-wiring-or-wall-damage">
                        {currentProduct?.kitIncludes?.map((item, index) => (
                          <li key={index} className="no-extra-wiring">
                            {item}
                          </li>
                        ))}
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
                        {currentProduct.howItWorks}
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
                        {currentProduct.legalDisclaimer}
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
