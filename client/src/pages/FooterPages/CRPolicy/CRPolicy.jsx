import React, { useEffect, useState } from "react";
import "./CRPolicy.css";

const CRPolicy = () => {
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
    <div className="CRP">
      {!isMobile ? (
        <div className="CRP-heading">Cancellation & Refund Policy</div>
      ) : (
        <></>
      )}
      <div className="CRP-contents">
        <div className="CRP-point-description">
          <p>
            Effortless Automation values customer satisfaction and strives to
            ensure a smooth experience. Our policy for cancellations and refunds
            is outlined below:
          </p>
        </div>

        <div className="CRP-points">
          <ol className="CRP-points-ol">
            <li>
              <p className="CRP-points-heading">Cancellation Requests</p>
              <p className="CRP-points-description">
                Cancellations are accepted if requested immediately after
                placing the order. However, once the order is processed or
                shipped, cancellation may not be possible.
              </p>
            </li>
            <li>
              <p className="CRP-points-heading">
                Damaged or Defective Products
              </p>
              <p className="CRP-points-description">
                If you receive a damaged or defective product, please report it
                to our Customer Service team within 7 days of receipt. Upon
                review, a replacement or refund will be provided if the issue is
                confirmed.
              </p>
            </li>
            <li>
              <p className="CRP-points-heading">Product Not as Expected</p>
              <p className="CRP-points-description">
                If the product does not meet your expectations, contact our
                Customer Service team within 7 days. After evaluation, the
                appropriate action will be taken.
              </p>
            </li>
            <li>
              <p className="CRP-points-heading">Refund Processing</p>
              <p className="CRP-points-description">
                Approved refunds will be processed within 6-8 business days
                following review.
              </p>
            </li>
          </ol>
          <p className="CRP-points-description">
            This policy ensures clarity and fairness in handling cancellations
            and refunds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CRPolicy;
