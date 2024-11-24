import React, { useEffect, useState } from "react";
import "./FAQ.css";

const FAQ = () => {
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
    <div className="FAQ">
      {!isMobile ? <div className="FAQ-heading">FAQ</div> : <></>}
      <div className="FAQ-contents">
        <div className="FAQ-points">
          <ol className="FAQ-points-ol">
            <li>
              <p className="FAQ-points-heading">
                What is Effortless Automation?
              </p>
              <p className="FAQ-points-description">
                Effortless Automation is a leading provider of smart home
                automation solutions, offering affordable, reliable, and secure
                IoT-based products to make homes smarter and more connected.
              </p>
            </li>
            <li>
              <p className="FAQ-points-heading">
                How do I control my home devices with your system?
              </p>
              <p className="FAQ-points-description">
                Our products allow you to control home devices such as lights,
                fans, ACs, and more through your mobile phone, remote control,
                or even voice commands via Alexa.
              </p>
            </li>
            <li>
              <p className="FAQ-points-heading">
                Do I need to change my existing wiring to install your products?
              </p>
              <p className="FAQ-points-description">
                No, our products are designed to fit seamlessly behind your
                existing switchboard, requiring no additional wiring or wall
                damage.
              </p>
            </li>
            <li>
              <p className="FAQ-points-heading">
                Are your smart home devices compatible with Alexa and Google
                Assistant?
              </p>
              <p className="FAQ-points-description">
                Yes, our devices are fully compatible with both Alexa and Google
                Assistant, allowing for hands-free control of your smart home.
              </p>
            </li>

            <li>
              <p className="FAQ-points-heading">
                What kind of support do you provide for installation?
              </p>
              <p className="FAQ-points-description">
                We offer installation support over the phone to guide you
                through setting up our smart home devices with ease.
              </p>
            </li>

            <li>
              <p className="FAQ-points-heading">
                Do you offer warranty on your products?
              </p>
              <p className="FAQ-points-description">
                Yes, all our products come with a warranty. Please refer to the
                product manual or our website for specific warranty details.
              </p>
            </li>

            <li>
              <p className="FAQ-points-heading">
                How do I update the firmware on my smart devices?
              </p>
              <p className="FAQ-points-description">
                Firmware updates can be easily done remotely via the OTA
                (Over-the-Air) feature through our user-friendly app.
              </p>
            </li>

            <li>
              <p className="FAQ-points-heading">
                What happens if the power goes out?
              </p>
              <p className="FAQ-points-description">
                Our products come with a memory function that ensures your
                devices return to their previous state when power is restored.
              </p>
            </li>

            <li>
              <p className="FAQ-points-heading">
                Can I cancel or return my order?
              </p>
              <p className="FAQ-points-description">
                Cancellations are accepted if made immediately after placing the
                order. For more details, please refer to our Cancellation &
                Refund Policy.
              </p>
            </li>

            <li>
              <p className="FAQ-points-heading">
                How do I contact customer support?
              </p>
              <p className="FAQ-points-description">
                You can reach our customer support team via email at
                nssmarthomeautomation@gmail.com or through the contact form on
                our website.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
