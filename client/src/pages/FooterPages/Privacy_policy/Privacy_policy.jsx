import React, { useEffect, useState } from "react";
import "./Privacy_policy.css";

const Privacy_policy = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 390);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="PP">
      {!isMobile ? <div className="PP-heading">Privacy Policy</div> : <></>}
      <div className="PP-contents">
        <div className="PP-points-description">
          <p>
            Effortless Automation Pvt. Ltd. is dedicated to protecting your
            privacy. This policy outlines how we collect, use, and safeguard any
            information you provide while using our website.
          </p>
        </div>
        <div className="PP-points">
          <div>
            <p className="PP-points-heading">Information We Collect</p>
            <p className="PP-points-description">
              We may collect the following information:
              <br />
              - Name
              <br />
              - Contact information (email address)
              <br />- Other relevant information for surveys and offers
            </p>
          </div>
          <div>
            <p className="PP-points-heading">How We Use Your Information</p>
            <p className="PP-points-description">
              We collect this information to better understand your needs and
              improve our services. Specifically, we use it for:
              <br />- Internal record keeping
              <br />- Product and service improvement
              <br />- Periodic promotional emails about new products, offers, or
              information you may find interesting
              <br />- Market research purposes, such as contacting you via
              email, phone, or mail
              <br />- Website customization based on your preferences
            </p>
          </div>
          <div>
            <p className="PP-points-heading">Security</p>
            <p className="PP-points-description">
              We are committed to ensuring that your information is secure and
              have implemented appropriate measures to prevent unauthorized
              access or disclosure.
            </p>
          </div>
          <div>
            <p className="PP-points-heading">Cookies</p>
            <p className="PP-points-description">
              Cookies are small files placed on your computer to help analyze
              web traffic and enhance your experience. We use cookies to:
              <br />- Identify which pages are being used
              <br />- Improve our website by analyzing data on user preferences
              <br />- Customize the site to your needs
            </p>
          </div>
          <div>
            <p className="PP-points-description">
              You can choose to accept or decline cookies. Declining cookies may
              prevent full use of the website.
            </p>
          </div>
          <div>
            <p className="PP-points-description">
              We will not sell or distribute your personal information without
              your permission unless required by law. If any information we hold
              about you is incorrect, please contact us, and we will promptly
              correct it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy_policy;
