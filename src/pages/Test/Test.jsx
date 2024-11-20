import React from "react";
import "./Test.css";

function Test() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://i.imgur.com/23g2hY4.png"
                alt="Logo"
                className="logo"
              />
            </div>
            <div className="col-md-6">
              <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Smart Space
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-3">
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
        <div className="product-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="product-title">
                  4 Switch Control (10 amp each)
                </h1>
                <p className="product-price">₹5,490.00 ₹5,215.50</p>
                <button className="btn btn-primary">Raise Inquiry</button>
              </div>
              <div className="col-md-6">
                <img
                  src="https://i.imgur.com/k588V4h.png"
                  alt="Product"
                  className="product-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="product-description">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="product-description-text">
                  This is a 4 switch control panel with 10 amp each. It is
                  designed for smart home automation and can be used to control
                  lights, fans, and other appliances. The panel is compact and
                  easy to install. It is also energy efficient and can help
                  reduce power consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Test;
