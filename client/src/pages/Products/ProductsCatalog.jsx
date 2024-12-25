import React from "react";
import axios from "axios";
import "./ProductsCatalog.css";
import catalogImage from "../../assets/ProductsCatalog/product catalogue.png";
import downloadIcon from "../../assets/ProductsCatalog/Icon.png";

const ProductsCatalog = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get("/api/catalog/download", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Product_Catalog.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
      alert("Failed to download catalog.");
    }
  };

  return (
    <div className="catalog-container">
      <div className="catalog-content">
        <div className="catalog-heading-container">
          <label className="catalog-heading">
            Elevate Your Home Experience
          </label>
          <p className="catalog-desc">
            Browse our product catalog and bring smart living to your doorstep.
          </p>
        </div>
        <button onClick={handleDownload} className="catalog-btn">
          <img src={downloadIcon} />
          <span>Download Product Catalog</span>
        </button>
      </div>
      <img className="catalog-image" src={catalogImage} />
    </div>
  );
};

export default ProductsCatalog;
