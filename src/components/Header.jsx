import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import utraLogo from "../assets/images/logo/utraLogoWhite.png";

export default function Header() {
  const location = useLocation();
  const [isTeamsOpen, setIsTeamsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileTeamsOpen, setIsMobileTeamsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileTeamsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Teams", path: "/teams", hasDropdown: true },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contact", path: "/contact" },
    { name: "UTRA Hacks", path: "https://hackathon.utra.ca/", external: true },
  ];

  const teamSubItems = [
    { name: "ART", path: "/teams/art" },
    { name: "SUMO", path: "/teams/sumo" },
    { name: "Combat", path: "/teams/combat" },
    { name: "Pacbot", path: "/teams/6ixpac" },
    { name: "Robosoccer", path: "/teams/robosoccer" },
    { name: "Robonars", path: "/teams/robonars" },
    { name: "Web", path: "/teams/web" },
    { name: "Marketing", path: "/teams/marketing" },
    { name: "Outreach", path: "/teams/outreach" },
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

  const getMobileNavItemClasses = (path) => {
    const currentPath = location.pathname || "/";
    const isActive =
      currentPath === path ||
      (path === "/teams" && currentPath.startsWith("/teams"));

    if (isActive) {
      return "bg-gradient-to-r from-text-gradient-purple to-text-gradient-blue bg-clip-text text-transparent";
    }
    return "text-white";
  };

  return (
    <>
      <header className="w-full h-[84px] px-4 bg-black text-white fixed top-0 z-50">
        <div className="max-w-6xl mx-auto h-full">
          <nav className="flex items-center justify-between h-full">
            <Link to="/">
              <img src={utraLogo} alt="UTRA Logo" className="max-w-[180px]" />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-10 py-[30px]">
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
                                subItem.path,
                              )}`}
                            >
                              <span
                                className={getDropdownItemTextClasses(
                                  subItem.path,
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

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-6 h-[3px] bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              ></span>
              <span
                className={`block w-6 h-[3px] bg-white rounded my-1 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-6 h-[3px] bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              ></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-neutral-900 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.external ? (
                  <a
                    href={item.path}
                    className="block text-lg text-white hover:text-purple-400 transition-colors py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ) : item.hasDropdown ? (
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        className={`text-lg py-2 transition-colors ${getMobileNavItemClasses(item.path)}`}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setIsMobileTeamsOpen(!isMobileTeamsOpen)}
                        className="text-white p-2"
                        aria-label="Toggle teams submenu"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transition-transform duration-200 ${isMobileTeamsOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Mobile Teams Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isMobileTeamsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <ul className="pl-4 mt-2 space-y-2 border-l border-neutral-700">
                        {teamSubItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.path}
                              className={`block py-1.5 text-sm transition-colors ${getMobileNavItemClasses(subItem.path)}`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block text-lg py-2 transition-colors ${getMobileNavItemClasses(item.path)}`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[84px]"></div>
    </>
  );
}
