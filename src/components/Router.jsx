import { Routes, Route } from "react-router-dom";

// Import page components
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import TeamsPage from "../pages/TeamsPage";
import SponsorsPage from "../pages/SponsorsPage";
import CombatPage from "../pages/teams/CombatPage";

// Import team subpages
import ArtPage from "../pages/teams/ArtPage";
import SumoPage from "../pages/teams/SumoPage";
import CombatPage from "../pages/teams/CombatPage";
import SixpacPage from "../pages/teams/SixpacPage";
import RobosoccerPage from "../pages/teams/RobosoccerPage";

export default function Router() {
  return (
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
    </Routes>
  );
}
