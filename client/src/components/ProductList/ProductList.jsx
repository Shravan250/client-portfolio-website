import React, { useEffect, useRef, useState } from "react";
import "./ProductList.css";
import image from "../../assets/LandingPage/ProductList/image.png";
import minusIcon from "../../assets/LandingPage/ProductList/Minus.svg";
import plusIcon from "../../assets/LandingPage/ProductList/Plus.svg";
import item1 from "../../assets/LandingPage/ProductList/item-1.png";
import item2 from "../../assets/LandingPage/ProductList/item-2.png";
import item3 from "../../assets/LandingPage/ProductList/item-3.png";

function ProductList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const productRefs = useRef([]);
  const productsContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const products = [
    {
      name: "Retrofit Switches",
      description: (
        <>
          Ready for a smart home—without the hassle. Upgrade your existing
          switchboards, wiring, and appliances to smart control with ease,{" "}
          <span className="no-replacements-needed">
            no replacements needed.
          </span>
        </>
      ),
      image: item1,
    },
    {
      name: "Smart Sensors",
      description: (
        <>
          Automatic convenience at your fingertips. Our smart sensors control
          lights, fans, doorbells, and more,{" "}
          <span className="no-replacements-needed">
            activating as you enter the space
          </span>{" "}
          with adjustable time delays. Perfect for stairs, corridors, basements,
          and more.
        </>
      ),
      image: item2,
    },
    {
      name: "Smart Curtain",
      description: (
        <>
          Control your curtains from anywhere! With WiFi connectivity, voice
          assistant integration, and scheduling features, enjoy effortless
          control of your curtains through your{" "}
          <span className="no-replacements-needed">
            phone or smart speaker.
          </span>
        </>
      ),
      image: item3,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        root: productsContainerRef.current,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.1,
      }
    );

    productRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      productRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const previousIndex =
    activeIndex === 0 ? products.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === products.length - 1 ? 0 : activeIndex + 1;

  return (
    <div id="our-products-section" className="our-products-parent-container">
      <div className="our-products-title">Our Products</div>
      <div className="our-products-container">
        <div className="out-products-btn-container">
          {products.map((product, index) => (
            <div
              key={index}
              className={`product-container ${
                activeIndex === index ? "expanded" : ""
              }`}
              data-index={index}
              ref={(el) => (productRefs.current[index] = el)}
            >
              <button className="toggle-wrapper" onClick={() => toggle(index)}>
                <img
                  className="toggle-icon"
                  alt="Toggle Icon"
                  src={activeIndex === index ? minusIcon : plusIcon}
                />
              </button>
              <div className="our-product-info">
                <div className="our-product-title">{product.name}</div>
                {activeIndex === index && (
                  <div className="ready-for-a-container">
                    <p className="our-product-description">
                      {product.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="our-products-img-container">
          <img
            className={`our-product-item-img ${
              isMobile ? "mv-prev" : "upper-right"
            } ${activeIndex === previousIndex ? "active" : ""}`}
            src={products[previousIndex].image}
            alt="Previous Product Item"
          />
          <img
            className={`our-product-item-img center ${
              activeIndex === activeIndex ? "active" : ""
            }`}
            src={products[activeIndex].image}
            alt="Current Product Item"
          />
          <img
            className={`our-product-item-img ${
              isMobile ? "mv-next" : "lower-right"
            }  ${activeIndex === nextIndex ? "active" : ""}`}
            src={products[nextIndex].image}
            alt="Next Product Item"
          />
          {activeIndex == 2 && <img className="item-3" src={item3} alt="" />}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
