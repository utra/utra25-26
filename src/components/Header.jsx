import { Link, NavLink, useLocation } from "react-router-dom";
import utraLogo from "../assets/images/logo/utraLogoWhite.png";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Join Us", path: "/join" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "UTRAHacks", path: "https://hackathon.utra.ca/", external: true },
  ];

  const getNavItemClasses = (path) => {
    // Initialize to home path if location hasn't loaded yet, otherwise use current path
    const currentPath = location.pathname || "/";
    const isActive = currentPath === path;
    const baseClasses = "relative transition-colors duration-500";

    if (isActive) {
      // Active state: purple text with full underline
      return `${baseClasses} text-purple-400 after:content-[''] after:absolute after:left-0 after:top-[calc(100%+10px)] after:h-0.5 after:w-full after:bg-purple-400 hover:after:w-full`;
    } else {
      // Non-active state: hover effects
      return `${baseClasses} hover:text-purple-400 after:content-[''] after:absolute after:left-0 after:top-[calc(100%+10px)] after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:duration-500 hover:after:w-full`;
    }
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
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.path}
                      className="relative hover:text-purple-400 transition-colors duration-500 after:content-[''] after:absolute after:left-0 after:top-[calc(100%+10px)] after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:duration-500 hover:after:w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
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
