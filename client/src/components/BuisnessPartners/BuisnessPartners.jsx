import React from "react";
import "./BuisnessPartners.css"; // Ensure your styles are here
import checkmark from "../../assets/LandingPage/BuisnessPartners/Icon.svg";

function BusinessPartnerOffers() {
  return (
    <div className="BPO">
      <div className="BPO-heading">Offers for our Business Partners</div>
      <div className="BPO-contents">
        <div className="rectangle-parent">
          <div className="rectangle-div"></div>
          <div className="enterprise">
            <div className="content">
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">
                  Products stocks given to you
                </div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">
                  You can appoint dealers in particular district
                </div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">
                  Distributorship certificate
                </div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">Marketing materials</div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">
                  Your details will be listed over our official website
                </div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">
                  All leads from your district will be transferred to you
                </div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">
                  Lifetime hardware & software support*
                </div>
              </div>
            </div>
            <button className="buttons">
              <div className="iconfunnel"></div>
              <div className="products-stocks-given">
                Investment Rs 1.5 Lakh
              </div>
              <div className="iconfunnel"></div>
            </button>
          </div>
          <div className="title">
            <div className="distributors-for-a-container">
              <span>Distributors-</span>
              <span className="request-a-call"> </span>
              <span className="for-a-district">“For a district”</span>
            </div>
          </div>
        </div>
        <div className="rectangle-parent">
          <div className="rectangle-div-2"></div>
          <div className="enterprise1">
            <div className="content">
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">
                  Brand logo, packaging, manuals & products given to you
                </div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">
                  Android mobile apllication with your own brand name
                </div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">
                  iOS mobile application with your own brand name
                </div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">Alexa voice skills</div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">Google voice skills</div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">Firmware OTA update</div>
              </div>
              <div className="BPO-list-items">
                <img className="checkbox-icon" alt src={checkmark} />

                <div className="products-stocks-given">
                  Lifetime hardware & software support*
                </div>
              </div>
            </div>
            <button className="buttons">
              <div className="iconfunnel"></div>
              <div className="products-stocks-given">
                Investment Rs 3.5 Lakh
              </div>
              <div className="iconfunnel"></div>
            </button>
          </div>
          <div className="launch-your-own-container">
            <span>Launch your own </span>
            <span className="for-a-district">brand</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessPartnerOffers;
