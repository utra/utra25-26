import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-5xl px-4 py-12">
                <div className="flex flex-col items-start space-y-6">
                    {/* Logo and tagline */}
                    <div className="flex flex-col space-y-2">
                        <h2 className="text-xl font-bold tracking-wide">UTRA</h2>
                        <p className="text-gray-400 text-sm">Design. Build. Inspire.</p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center space-x-4">
                        <a 
                            href="https://www.instagram.com/utra_uoft/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/university-of-toronto-robotics-association/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Address */}
                    <div className="text-gray-400 text-sm leading-relaxed">
                        <p>Myhal Centre 015D, 55 St George St, Toronto ON</p>
                        <p>M5S 1A4</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}