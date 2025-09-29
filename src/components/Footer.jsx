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
                            href="https://instagram.com/utra" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                            aria-label="Instagram"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zm5.365 12.287c0 .308-.013.617-.013.926-.013 2.817-2.295 5.098-5.111 5.098s-5.099-2.281-5.111-5.098c0-.309-.013-.618-.013-.926 0-.321.013-.642.013-.963h-.963v5.263c0 .321.258.579.579.579h10.99c.321 0 .579-.258.579-.579v-5.263h-.963c.013.321.013.642.013.963zm-2.53-3.802c.642.642.642 1.686 0 2.329-.321.321-.741.481-1.164.481s-.844-.16-1.165-.481c-.642-.643-.642-1.687 0-2.329.321-.321.741-.481 1.165-.481s.843.16 1.164.481zm.963-1.97h-7.731v1.302h7.731v-1.302zm-3.865-2.17c-1.698 0-3.073 1.376-3.073 3.073s1.375 3.073 3.073 3.073 3.073-1.376 3.073-3.073-1.375-3.073-3.073-3.073z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://linkedin.com/company/utra" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://utra.ca" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                            utra.ca
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