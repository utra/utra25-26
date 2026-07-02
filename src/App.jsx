import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Router from "./components/Router";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Analytics() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: location.pathname });
    }
  }, [location]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <div>
        <Header />
        <div className="flex-grow">
          <Router />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
