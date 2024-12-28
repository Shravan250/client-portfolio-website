import React, { useState } from "react";
import axios from "axios";
import API_URL from "../../../config/config";
import "./UploadPDF.css";

const UploadPDF = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(`${API_URL}/api/upload/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded successfully.");
    } catch (err) {
      alert("Error uploading file.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Upload PDF</h3>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload} className="upload-btn">
        Upload
      </button>
    </div>
  );
};

export default UploadPDF;
