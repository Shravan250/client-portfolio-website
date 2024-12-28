import React, { useState } from "react";
import icon from "../../assets/PopUp/Package details.png";
import "./PopUp.css";
import API_URL from "../../../config/config";
const PopUp = ({ onSubmit }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/contact/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, phone }),
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok) {
        onSubmit();
      }
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div id="popup" className="popup-overlay">
        <div className="popup-main-container">
          <div className="popup-heading">
            <img src={icon} alt="" />
            <p>Please enter the details to proceed:</p>
          </div>
          <form className="popup-input-container" onSubmit={handleSubmit}>
            <div
              className={`popup-field ${
                focusedField === "name" ? "input-focused" : ""
              }`}
            >
              <label htmlFor="name" className="popup-label-title">
                Your Name
              </label>
              <input
                id="name"
                className="popup-input"
                placeholder="Snaji"
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <div
              className={`popup-field ${
                focusedField === "email" ? "input-focused" : ""
              }`}
            >
              <label htmlFor="email" className="popup-label-title">
                Email
              </label>
              <input
                id="email"
                className="popup-input"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <div
              className={`popup-field ${
                focusedField === "phone" ? "input-focused" : ""
              }`}
            >
              <label htmlFor="phone" className="popup-label-title">
                Phone Number
              </label>
              <input
                id="phone"
                className="popup-input"
                onChange={(e) => setPhone(e.target.value)}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <button type="submit" className="popup-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopUp;
