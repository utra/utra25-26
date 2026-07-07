import { FaInstagram, FaLinkedin } from "react-icons/fa";
import utraLogo from "../assets/images/logo/utraLogoWhiteMobile.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Gradient accent line matching the site palette */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-utra-light-purple/60 to-transparent" />

      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold">UTRA</span>
              <img src={utraLogo} alt="UTRA Logo" className="h-12" />
            </div>
            <p className="text-gray-400 text-sm">Design. Build. Inspire.</p>

            {/* Social links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/utra_uoft/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/university-of-toronto-robotics-association/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="text-gray-400 text-sm leading-relaxed sm:text-right">
            <p>Myhal Centre 015D, 55 St George St, Toronto ON</p>
            <p>M5S 1A4</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} University of Toronto Robotics
            Association
          </p>
        </div>
      </div>
    </footer>
  );
}
