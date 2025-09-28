import { Routes, Route } from "react-router-dom";

// Import page components
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import JoinPage from "../pages/JoinPage";
import SponsorsPage from "../pages/SponsorsPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
    </Routes>
  );
}
