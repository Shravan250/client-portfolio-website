import React, { useEffect, useRef, useState } from "react";
import SolutionsSection from "../../components/SolutionSection/SolutionSection";
import ProductList from "../../components/ProductList/ProductList";
import AppPromo from "../../components/Promo/Promo";
import FeaturesGrid from "../../components/FeaturesGrid/FeaturesGrid";
import VoiceControlIntegration from "../../components/VoiceControl/VoiceControl";
import SmartRemoteControl from "../../components/SmartRemoteControl/SmartRemoteControl";
import BadgeSection from "../../components/BadgeSection/BadgeSection";
import BusinessPartnerOffers from "../../components/BuisnessPartners/BuisnessPartners";
import "./LandingPage.css";
import arrowDown from "../../assets/LandingPage/LandingImage/arrowdown.gif";
import image from "../../assets/LandingPage/LandingImage/hero.png";

const LandingPage = () => {
  const sections = useRef([]);
  const [scrollPhase, setScrollPhase] = useState(0);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  const handleScrollEvent = (e) => {
    e.preventDefault();

    if (animationInProgress) return;

    if (e.deltaY > 0 && scrollPhase < 5) {
      startAnimation(scrollPhase + 1);
    } else if (e.deltaY < 0 && scrollPhase > 0) {
      startAnimation(scrollPhase - 1);
    }
  };

  const handleTouchEvent = (e) => {
    const touch = e.touches[0];
    const touchStartY = touch.clientY;

    const handleTouchMove = (moveEvent) => {
      const touchMoveY = moveEvent.touches[0].clientY;
      const deltaY = touchStartY - touchMoveY;

      if (animationInProgress) return;

      if (deltaY > 50 && scrollPhase < 5) {
        startAnimation(scrollPhase + 1);
        window.removeEventListener("touchmove", handleTouchMove);
      } else if (deltaY < -50 && scrollPhase > 0) {
        startAnimation(scrollPhase - 1);
        window.removeEventListener("touchmove", handleTouchMove);
      }
    };

    window.addEventListener("touchmove", handleTouchMove);
  };

  const startAnimation = (nextPhase) => {
    setAnimationInProgress(true);
    setScrollPhase(nextPhase);

    if (nextPhase === 5) {
      setIsScrollLocked(false);
      // Show main content after animation
      setTimeout(() => {
        document
          .querySelector(".main-content-landing-page")
          .classList.add("show");
      }, 1000); // Match this timeout with your animation duration
    }

    setTimeout(() => setAnimationInProgress(false), 1000);
  };

  useEffect(() => {
    if (isScrollLocked) {
      window.addEventListener("wheel", handleScrollEvent, { passive: false });
      window.addEventListener("touchstart", handleTouchEvent, {
        passive: false,
      });
    }

    return () => {
      window.removeEventListener("wheel", handleScrollEvent);
      window.removeEventListener("touchstart", handleTouchEvent);
    };
  }, [scrollPhase, animationInProgress, isScrollLocked]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`page ${scrollPhase === 1 ? "show-top-text" : ""} 
    ${scrollPhase === 2 ? "return-to-center" : ""}
    ${scrollPhase === 3 ? "show-left-text" : ""}
    ${scrollPhase === 4 ? "return-to-center" : ""}
    ${scrollPhase === 5 ? "remove-image show-content" : ""}`}
    >
      <section
        className={`LandingImage ${scrollPhase === 5 ? "hidden" : ""}`}
        style={{ display: scrollPhase === 5 ? "none" : "flex" }}
      >
        <div className="LandingImage-top">
          <img className="arrow-down" src={arrowDown} alt="Arrow Down" />
          <div className="LandingImage-left">
            <img className="image" alt="Hero" src={image} />
          </div>
        </div>
      </section>
      {scrollPhase === 1 && (
        <div className="top-text">
          <p className="top-text-1">Your home,</p>
          <p className="top-text-2">smarter than ever</p>
        </div>
      )}
      {scrollPhase === 3 && (
        <div className="right-text">
          <p className="right-text-1">
            <span className="right-text-1-span">Seamless</span> Smart Living
          </p>
          <p className="right-text-2">
            Experience a connected home where your devices work together in a
            unified system to simplify life, enhance comfort, and boost security
            in every corner.
          </p>
        </div>
      )}

      <div className="main-content-landing-page">
        <section ref={(el) => (sections.current[0] = el)} className="fade-in">
          <SolutionsSection />
        </section>
        <section
          ref={(el) => (sections.current[1] = el)}
          className="slide-in-left"
        >
          <ProductList />
        </section>
        <section ref={(el) => (sections.current[2] = el)} className="fade-in">
          <AppPromo />
        </section>
        <section
          ref={(el) => (sections.current[3] = el)}
          className="slide-in-left"
        >
          <FeaturesGrid />
        </section>
        <section ref={(el) => (sections.current[4] = el)} className="fade-in">
          <VoiceControlIntegration />
        </section>
        <section
          ref={(el) => (sections.current[5] = el)}
          className="slide-in-left"
        >
          <SmartRemoteControl />
        </section>
        <section
          ref={(el) => (sections.current[6] = el)}
          className="slide-in-right"
        >
          <BadgeSection />
        </section>
        <section
          ref={(el) => (sections.current[7] = el)}
          className="slide-in-left"
        >
          <BusinessPartnerOffers />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
