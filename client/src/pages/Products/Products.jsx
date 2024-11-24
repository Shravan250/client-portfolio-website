import React, { useEffect, useState } from "react";
import "./Products.css";
import filter from "../../assets/Products/Filter.svg";
import sort from "../../assets/Products/Sort.svg";
import productData from "../../../ProductData/productData";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({
  name,
  originalPrice,
  discountedPrice,
  imageSrc,
  index,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/single-product", { state: { productIndex: index } });
  };
  return (
    <div className="selected-product-view" onClick={handleClick}>
      <div className="image-parent1">
        <img className="image-icon" alt={name} src={imageSrc} />
        <div className="switch-control-with-remote-1-parent">
          <div className="products-tab-switch-control-with">{name}</div>
          <div className="div2">
            <span>
              <span className="span">{originalPrice}</span>
            </span>
            <span className="span1">{discountedPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);
  const [activeTab, setActiveTab] = useState("Retrofit Switches");

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("singleProductVisited");
    };
  }, []);

  const filteredProducts = productData.filter(
    (product) => product.category === activeTab
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <div className="porducts-tab">
          <div className={`products-tab-title ${scrolled ? "scrolled" : ""}`}>
            Products
          </div>
          <div className="products-tab-container">
            <div className="three-tab-container">
              {["Retrofit Switches", "Smart Sensors", "Smart Curtain"].map(
                (tab) => (
                  <button
                    key={tab}
                    className={`tab-wrapper ${
                      activeTab === tab ? "product-tab-active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <p>{tab}</p>
                  </button>
                )
              )}
            </div>
            <div className="filter-sort-container">
              <div className="filter-parent">
                <div className="filter">Filter</div>
                <img className="filter-icon" alt="Filter" src={filter} />
              </div>
              <div className="sort-parent">
                <div className="filter">Sort</div>
                <img className="filter-icon" alt="Sort" src={sort} />
              </div>
            </div>
          </div>
          <div className="products-list">
            <div className="products-number">
              {filteredProducts.length} Products
            </div>
            <div className="card-container">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                  imageSrc={product.imageSrc[0]}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="porducts-tab">
          <div className="products-tab-container">
            <div className="three-tab-container">
              {["Retrofit Switches", "Smart Sensors", "Smart Curtain"].map(
                (tab) => (
                  <button
                    key={tab}
                    className={`tab-wrapper ${
                      activeTab === tab ? "product-tab-active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <p>{tab}</p>
                  </button>
                )
              )}
            </div>
            <div className="mv-filter-and-sort">
              <div className="products-number">
                {filteredProducts.length} Products
              </div>
              <div>
                {" "}
                <div className="filter-sort-container">
                  <div className="filter-parent">
                    <img className="filter-icon" alt="Filter" src={filter} />
                  </div>
                  <div className="sort-parent">
                    <img className="filter-icon" alt="Sort" src={sort} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products-list">
            <div className="card-container">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                  imageSrc={product.imageSrc[0]}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
