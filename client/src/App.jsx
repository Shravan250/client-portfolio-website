import React, { useState, useEffect } from "react";
import Layout from "./layout/layout";
import Loading from "./pages/Loading/Loading";
import PopUp from "./components/PopUp/PopUp";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isFirstVisit = !sessionStorage.getItem("visited");
    if (!isFirstVisit) {
      setShowLoading(false);
    }
    sessionStorage.setItem("visited", "true");
  }, []);

  useEffect(() => {
    const hasSubmitted = localStorage.getItem("popupSubmitted");
    if (!hasSubmitted) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 120000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handlePopupSubmit = () => {
    localStorage.setItem("popupSubmitted", "true");
    setShowPopup(false);
  };

  return (
    <>
      {showLoading ? (
        <Loading onLoadingComplete={() => setShowLoading(false)} />
      ) : (
        <>
          {showPopup && <PopUp onSubmit={handlePopupSubmit} />}
          <Layout />
        </>
      )}
    </>
  );
}

export default App;
