import React from "react";
import "./Terms_and_Conditions.css";
import Vector1847 from "../../../assets/FooterPages/Vector 1847.png";

const Terms_and_Conditions = () => {
  return (
    <div className="TC">
      <div className="TC-heading">Terms & Conditions</div>
      <div className="TC-contents">
        <div className="TC-main-content">
          <p>
            Welcome to the Effortless Automation Pvt Ltd website. By continuing
            to browse and use this website, you agree to comply with and be
            bound by the following terms and conditions of use, which together
            with our privacy policy, govern Effortless Automation's relationship
            with you in relation to this website.
          </p>
          <p>
            The term ‘Effortless Automation’ or ‘us’ or ‘we’ refers to the owner
            of the website whose registered office is S.No. 560/583, Office No.
            3, Near Dhone Tyres, Market Yard, Pune - 411037, Maharashtra. The
            term ‘you’ refers to the user or viewer of our website.
          </p>
        </div>
        <img className="TC-line" src={Vector1847} alt="" />
        <div className="TC-points">
          <ol className="TC-points-ol">
            <li>
              <p className="TC-points-heading">Website Use</p>
              <p className="TC-points-description">
                The content of this website is for your general information and
                use only. It is subject to change without notice. By using this
                website, you accept these terms in full. If you disagree with
                these terms and conditions or any part of these terms and
                conditions, you must not use this website.
              </p>
            </li>
            <li>
              <p className="TC-points-heading">Accuracy and Information</p>
              <p className="TC-points-description">
                Neither we nor any third parties provide any warranty or
                guarantee regarding the accuracy, timeliness, performance,
                completeness, or suitability of the information and materials
                found or offered on this website. You acknowledge that such
                information may contain inaccuracies or errors, and we expressly
                exclude liability for any such inaccuracies or errors to the
                fullest extent permitted by law.
              </p>
            </li>
            <li>
              <p className="TC-points-heading">User Responsibility</p>
              <p className="TC-points-description">
                Your use of any information or materials on this website is
                entirely at your own risk. It is your responsibility to ensure
                that any products, services, or information available through
                this website meet your specific requirements. Effortless
                Automation will not be liable for any damages resulting from
                your use of this website.
              </p>
            </li>
            <li>
              <p className="TC-points-heading">Intellectual Property</p>
              <p className="TC-points-description">
                This website contains material which is owned by or licensed to
                us, including but not limited to the design, layout, look,
                appearance, and graphics. Reproduction of this material is
                prohibited unless in accordance with the copyright notice, which
                forms part of these terms and conditions.
              </p>
            </li>
            <li>
              <p className="TC-points-heading">
                Third-Party Trademarks and Links
              </p>
              <p className="TC-points-description">
                All trademarks reproduced on this website, which are not the
                property of, or licensed to us, are acknowledged. This website
                may include links to other websites. These links are provided
                for your convenience. We have no control over the content of
                external sites, and linking does not imply endorsement.
              </p>
            </li>
            <li>
              <p className="TC-points-heading">Unauthorized Use</p>
              <p className="TC-points-description">
                Unauthorized use of this website may result in a claim for
                damages and/or be a criminal offense. You may not create a link
                to this website from another website or document without prior
                written consent from Effortless Automation.
              </p>
            </li>
            <li>
              <p className="TC-points-heading">Transactions and Payments</p>
              <p className="TC-points-description">
                We as a merchant are not liable for any loss or damage arising
                from a transaction decline due to the cardholder exceeding their
                preset limit as agreed with their bank. We strive to ensure
                secure transactions but cannot be held responsible for any
                discrepancies.
              </p>
            </li>
            <li>
              <p className="TC-points-heading">Governing Law</p>
              <p className="TC-points-description">
                Your use of this website and any disputes arising from such use
                are governed by the laws of India. Any legal actions will be
                subject to the jurisdiction of the courts of India.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Terms_and_Conditions;
