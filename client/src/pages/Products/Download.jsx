import React from "react";
import downloadIcon from "../../assets/ProductsCatalog/Icon.png";
import axios from "axios";
import API_URL from "../../../config/config";
const Download = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/catalog/download`);

      if (!response.data || !response.data.file) {
        alert("File not found.");
        return;
      }

      const { data, contentType } = response.data.file;

      // Convert base64 or Buffer to a Blob
      const byteCharacters = atob(data); // Decoding base64 (if stored as base64)
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: contentType });

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Product_Catalog.pdf");
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download catalog:", error);
      alert("Failed to download catalog.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Download PDF</h3>
      <button onClick={handleDownload} className="catalog-btn">
        <img src={downloadIcon} />
        <span>Download Product Catalog</span>
      </button>
    </div>
  );
};

export default Download;
