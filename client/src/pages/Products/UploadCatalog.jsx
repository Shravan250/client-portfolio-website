import React, { useState } from "react";
import axios from "axios";
import "./UploadCatalog.css";
import API_URL from "../../../config/config";

const UploadCatalog = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("catalog", file);

    try {
      await axios.post(`${API_URL}/api/catalog/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Catalog uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to upload catalog.");
    }
  };

  return (
    <div className="upload-container">
      <p>Upload Catalog Page</p>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="upload-btn">
        Upload Catalog
      </button>
    </div>
  );
};

export default UploadCatalog;
