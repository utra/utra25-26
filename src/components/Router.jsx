import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { useEffect } from "react";

// Import page components
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import TeamsPage from "../pages/TeamsPage";
import SponsorsPage from "../pages/SponsorsPage";
import ContactPage from "../pages/ContactPage";

// Import team subpages
import ArtPage from "../pages/teams/ArtPage";
import SumoPage from "../pages/teams/SumoPage";
import CombatPage from "../pages/teams/CombatPage";
import SixpacPage from "../pages/teams/SixpacPage";
import RobosoccerPage from "../pages/teams/RobosoccerPage";
import WebPage from "../pages/teams/WebPage";
import MarketingPage from "../pages/teams/MarketingPage";
import RobonarsPage from "../pages/teams/RobonarsPage";
import OutreachPage from "../pages/teams/OutreachPage";

// Scroll to top on route change (except back/forward navigation)
function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on PUSH navigation (clicking links)
    // POP means back/forward button - let browser handle scroll restoration
    if (navigationType === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
}

export default function Router() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/teams/art" element={<ArtPage />} />
        <Route path="/teams/sumo" element={<SumoPage />} />
        <Route path="/teams/combat" element={<CombatPage />} />
        <Route path="/teams/6ixpac" element={<SixpacPage />} />
        <Route path="/teams/robosoccer" element={<RobosoccerPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/teams/web" element={<WebPage />} />
        <Route path="/teams/marketing" element={<MarketingPage />} />
        <Route path="/teams/robonars" element={<RobonarsPage />} />
        <Route path="/teams/outreach" element={<OutreachPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
