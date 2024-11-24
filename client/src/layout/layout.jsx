import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import LandingPage from "../pages/LandingPage/LandingPage";
import Products from "../pages/Products/Products";
import Terms_and_Conditions from "../pages/FooterPages/Terms_and_Conditions/Terms_and_Conditions";
import RefundCancellationPolicy from "../pages/FooterPages/CRPolicy/CRPolicy";
import FAQ from "../pages/FooterPages/FAQ/FAQ";
import PrivacyPolicy from "../pages/FooterPages/Privacy_policy/Privacy_policy";
import Contact from "../pages/FooterPages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import SmartSpace from "../pages/SmartSpace/SmartSpace";
import "./layout.css";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="div">
      {location.pathname === "/" && <div className="child"></div>}
      <NavigationBar className="navbar" />
      <div
        className={`main-content ${
          location.pathname === "/contact" ? "background-single-use" : ""
        }`}
      >
        <Routes key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route
            path="/terms-and-conditions"
            element={<Terms_and_Conditions />}
          />
          <Route
            path="/refund-cancellation-policy"
            element={<RefundCancellationPolicy />}
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/smart-space" element={<SmartSpace />} />
        </Routes>
      </div>
      {location.pathname !== "/single-product" && <Footer className="footer" />}
    </div>
  );
};

export default Layout;
