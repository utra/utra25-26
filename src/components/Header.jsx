import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import utraLogo from "../assets/images/logo/utraLogoWhite.png";

export default function Header() {
  const location = useLocation();
  const [isTeamsOpen, setIsTeamsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Teams", path: "/teams", hasDropdown: true },
    { name: "Sponsors", path: "/sponsors" },
    { name: "About Us", path: "/about" },
    { name: "UTRA Hacks", path: "https://hackathon.utra.ca/", external: true },
  ];

  const teamSubItems = [
    { name: "ART", path: "/teams/art" },
    { name: "SUMO", path: "/teams/sumo" },
    { name: "Combat", path: "/teams/combat" },
    { name: "6ixpac", path: "/teams/6ixpac" },
    { name: "Robosoccer", path: "/teams/robosoccer" },
  ];

  const getNavItemClasses = (path, hasDropdown = false) => {
    // Initialize to home path if location hasn't loaded yet, otherwise use current path
    const currentPath = location.pathname || "/";
    const isActive =
      currentPath === path ||
      (path === "/teams" && currentPath.startsWith("/teams"));
    const isDropdownOpen = hasDropdown && isTeamsOpen;
    const baseClasses = "relative transition-all duration-500";

    if (isActive || isDropdownOpen) {
      // Active state or dropdown open: gradient text with full underline (positioned near header bottom)
      return `${baseClasses} bg-gradient-to-r from-text-gradient-purple to-text-gradient-blue bg-clip-text text-transparent after:content-[''] after:absolute after:left-0 after:top-[calc(100%+27px)] after:h-0.5 after:w-full after:bg-gradient-to-r after:from-text-gradient-purple after:to-text-gradient-blue hover:after:w-full`;
    } else {
      // Non-active state: hover effects with gradient
      return `${baseClasses} hover:bg-gradient-to-r hover:from-text-gradient-purple hover:to-text-gradient-blue hover:bg-clip-text hover:text-transparent after:content-[''] after:absolute after:left-0 after:top-[calc(100%+27px)] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-text-gradient-purple after:to-text-gradient-blue after:transition-all after:duration-500 hover:after:w-full`;
    }
  };

  const getDropdownItemClasses = (path) => {
    const currentPath = location.pathname || "/";
    const isActive = currentPath === path;

    const baseClasses = "block px-6 py-2 transition-all duration-300";

    if (isActive) {
      return `${baseClasses} bg-neutral-800`;
    }
    return `${baseClasses} hover:bg-neutral-800`;
  };

  const getDropdownItemTextClasses = (path) => {
    const currentPath = location.pathname || "/";
    const isActive = currentPath === path;

    if (isActive) {
      return "bg-gradient-to-r from-text-gradient-purple to-text-gradient-blue bg-clip-text text-transparent";
    }
    return "text-white group-hover:bg-gradient-to-r group-hover:from-text-gradient-purple group-hover:to-text-gradient-blue group-hover:bg-clip-text group-hover:text-transparent";
  };

  return (
    <>
      <header className="w-full px-4 bg-black text-white fixed top-0 z-50">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center justify-between">
            <Link to="/">
              <img src={utraLogo} alt="UTRA Logo" className="max-w-[180px]" />
            </Link>
            <ul className="flex items-center space-x-10 py-[30px]">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setIsTeamsOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsTeamsOpen(false)}
                >
                  {item.external ? (
                    <a
                      href={item.path}
                      className="relative hover:bg-gradient-to-r hover:from-text-gradient-purple hover:to-text-gradient-blue hover:bg-clip-text hover:text-transparent transition-all duration-500 after:content-[''] after:absolute after:left-0 after:top-[calc(100%+27px)] after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-text-gradient-purple after:to-text-gradient-blue after:transition-all after:duration-500 hover:after:w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  ) : item.hasDropdown ? (
                    <>
                      <Link
                        to={item.path}
                        className={getNavItemClasses(item.path, true)}
                      >
                        {item.name}
                      </Link>
                      {/* Invisible bridge to connect nav item to dropdown */}
                      <div className="absolute left-0 right-0 h-[30px] top-full"></div>
                      {/* Dropdown Menu */}
                      {isTeamsOpen && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+30px)] w-[140px] bg-neutral-900 rounded-b shadow-lg z-50">
                          {teamSubItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className={`group ${getDropdownItemClasses(
                                subItem.path
                              )}`}
                            >
                              <span
                                className={getDropdownItemTextClasses(
                                  subItem.path
                                )}
                              >
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={getNavItemClasses(item.path)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[84px]"></div>
    </>
  );
}
