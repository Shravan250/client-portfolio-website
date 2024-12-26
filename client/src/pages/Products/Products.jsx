import React, { useEffect, useState } from "react";
import "./Products.css";
import debounce from "lodash.debounce";
import filter from "../../assets/Products/Filter.svg";
import sort from "../../assets/Products/Sort.svg";
import { useNavigate } from "react-router-dom";
import API_URL from "../../../config/config";
const ProductCard = ({
  name,
  originalPrice,
  discountedPrice,
  imageSrc,
  id,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`, { state: { productId: id } });
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
  const [isFilterHovered, setFilterIsHovered] = useState(false);
  const [isSortHovered, setSortIsHovered] = useState(false);
  const [applyFilter, setApplyFilter] = useState(false);
  const [applySort, setApplySort] = useState(false);
  const [value, setValue] = useState(50);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortType, setSortType] = useState("lowToHigh");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const sliderValue = e.target.value;
    const updatedMaxPrice = Math.round((sliderValue / 100) * 10000);
    setMaxPrice(updatedMaxPrice.toString());
    setApplyFilter(true);
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        category: activeTab,
      });
      const response = await fetch(`${API_URL}/api/products?${params}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = (products) => {
    const min = minPrice ? parseInt(minPrice) : 0;
    const max = maxPrice ? parseInt(maxPrice) : 10000;

    return products.filter((product) => {
      const price = parseFloat(
        product.discountedPrice.replace("₹", "").replace(",", "")
      );
      return price >= min && price <= max;
    });
  };

  const sortProducts = (products) => {
    return products
      .filter((product) => {
        if (sortType === "featured") {
          return product.isFeatured;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortType === "lowToHigh") {
          return (
            parseFloat(a.discountedPrice.replace("₹", "").replace(",", "")) -
            parseFloat(b.discountedPrice.replace("₹", "").replace(",", ""))
          );
        }
        if (sortType === "highToLow") {
          return (
            parseFloat(b.discountedPrice.replace("₹", "").replace(",", "")) -
            parseFloat(a.discountedPrice.replace("₹", "").replace(",", ""))
          );
        }
        if (sortType === "newest") {
          return new Date(b.dateCreated) - new Date(a.dateCreated);
        }
        return 0;
      });
  };

  const getProcessedProducts = () => {
    const activeTabProducts = products.filter(
      (product) => product.category === activeTab
    );

    const filtered = applyFilter
      ? filterProducts(activeTabProducts)
      : activeTabProducts;

    const sorted = applySort ? sortProducts(filtered) : filtered;

    return sorted;
  };

  useEffect(() => {
    fetchProducts();
  }, [activeTab]);

  const handleFilter = () => {
    setApplyFilter(true);
  };

  const handleSort = (type) => {
    setSortType(type);
    setApplySort(true);
  };

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("singleProductVisited");
    };
  }, []);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 390);
    }, 300);

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
              <div
                className="filter-parent"
                onMouseEnter={() => setFilterIsHovered(true)}
                onMouseLeave={() => setFilterIsHovered(false)}
              >
                <div className="filter">Filter</div>
                <img className="filter-icon" alt="Filter" src={filter} />
              </div>
              {isFilterHovered && (
                <div
                  className="filter-hover-container"
                  onMouseEnter={() => setFilterIsHovered(true)}
                  onMouseLeave={() => setFilterIsHovered(false)}
                >
                  <div className="filter-hover-item-container">
                    <button
                      className="filter-hover-item"
                      onClick={() => handleSort("lowToHigh")}
                    >
                      <p>Price: Low to High</p>
                    </button>
                    <button
                      className="filter-hover-item"
                      onClick={() => handleSort("highToLow")}
                    >
                      <p>Price: High to Low</p>
                    </button>
                    <button
                      className="filter-hover-item"
                      onClick={() => handleSort("featured")}
                    >
                      <p>Featured</p>
                    </button>
                    <button
                      className="filter-hover-item"
                      onClick={() => handleSort("newest")}
                    >
                      <p>Newest first</p>
                    </button>
                  </div>
                </div>
              )}
              <div
                className="sort-parent"
                onMouseEnter={() => setSortIsHovered(true)}
                onMouseLeave={() => setSortIsHovered(false)}
                onClick={handleFilter}
              >
                <div className="filter">Sort</div>
                <img className="filter-icon" alt="Sort" src={sort} />
              </div>
              {isSortHovered && (
                <div
                  className="sort-hover-container"
                  onMouseEnter={() => setSortIsHovered(true)}
                  onMouseLeave={() => setSortIsHovered(false)}
                >
                  <div className="sort-hover-title">Price range</div>
                  <div className="sort-hover-row">
                    <input
                      className="sort-hover-item"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                      className="sort-hover-item"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                  <div className="range-slider">
                    <div className="labels">
                      <span>₹0</span>
                      <span>₹10k</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={maxPrice ? (maxPrice / 10000) * 100 : 0}
                      className="slider"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="products-list">
            <div className="products-number">
              {getProcessedProducts().length} Products
            </div>
            <div className="card-container">
              {getProcessedProducts().map((product) => (
                <ProductCard
                  name={product.name}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                  imageSrc={product.imageSrc[0]}
                  id={product._id}
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
                {getProcessedProducts().length} Products
              </div>
              <div>
                {" "}
                <div className="filter-sort-container">
                  <div
                    className="filter-parent"
                    onMouseEnter={() => setFilterIsHovered(true)}
                    onMouseLeave={() => setFilterIsHovered(false)}
                  >
                    <img className="filter-icon" alt="Filter" src={filter} />
                  </div>
                  {isFilterHovered && (
                    <div
                      className="filter-hover-container"
                      onMouseEnter={() => setFilterIsHovered(true)}
                      onMouseLeave={() => setFilterIsHovered(false)}
                    >
                      <div className="filter-hover-item-container">
                        <button
                          className="filter-hover-item"
                          onClick={() => handleSort("lowToHigh")}
                        >
                          <p>Price: Low to High</p>
                        </button>
                        <button
                          className="filter-hover-item"
                          onClick={() => handleSort("highToLow")}
                        >
                          <p>Price: High to Low</p>
                        </button>
                        <button
                          className="filter-hover-item"
                          onClick={() => handleSort("featured")}
                        >
                          <p>Featured</p>
                        </button>
                        <button
                          className="filter-hover-item"
                          onClick={() => handleSort("newest")}
                        >
                          <p>Newest first</p>
                        </button>
                      </div>
                    </div>
                  )}
                  <div
                    className="sort-parent"
                    onMouseEnter={() => setSortIsHovered(true)}
                    onMouseLeave={() => setSortIsHovered(false)}
                    onClick={handleFilter}
                  >
                    <img className="filter-icon" alt="Sort" src={sort} />
                  </div>
                  {isSortHovered && (
                    <div
                      className="sort-hover-container"
                      onMouseEnter={() => setSortIsHovered(true)}
                      onMouseLeave={() => setSortIsHovered(false)}
                    >
                      <div className="sort-hover-title">Price range</div>
                      <div className="sort-hover-row">
                        <input
                          className="sort-hover-item"
                          placeholder="Min"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <input
                          className="sort-hover-item"
                          placeholder="Max"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                        />
                      </div>
                      <div className="range-slider">
                        <div className="labels">
                          <span>₹0</span>
                          <span>₹10k</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={(maxPrice / 10000) * 100 || 0}
                          className="slider"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="products-list">
            <div className="card-container">
              {getProcessedProducts().map((product) => (
                <ProductCard
                  name={product.name}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                  imageSrc={product.imageSrc[0]}
                  id={product._id}
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
