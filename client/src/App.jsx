import React, { useState, useEffect } from "react";
import Layout from "./layout/layout";
import Loading from "./pages/Loading/loading";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const isFirstVisit = !sessionStorage.getItem("visited");
    if (!isFirstVisit) {
      setShowLoading(false);
    }
    sessionStorage.setItem("visited", "true");
  }, []);

  return (
    <>
      {showLoading ? (
        <Loading onLoadingComplete={() => setShowLoading(false)} />
      ) : (
        <Layout />
      )}
    </>
  );
}

export default App;
