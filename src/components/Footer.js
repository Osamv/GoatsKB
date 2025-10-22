import React from "react";

/**
 * Footer
 *  - Site-wide footer with quick links and contact info.
 *  - Uses dynamic year and accessible link labels.
 */
const Footer = () => {
  const year = new Date().getFullYear();

  const linkBase =
    "transition-colors text-gray-300 hover:text-[#FF6A39] focus:outline-none focus:ring-2 focus:ring-[#FF6A39]/60 rounded";

  return (
    <footer className="mt-16 border-t border-gray-800 bg-[#1D252D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">Knowledge Bank</h3>
            <p className="text-gray-400">
              Your comprehensive resource for information and support.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className={linkBase} aria-label="Go to Home section">
                  Home
                </a>
              </li>
              <li>
                <a href="#articles" className={linkBase} aria-label="Go to Articles section">
                  Articles
                </a>
              </li>
              <li>
                <a href="#team" className={linkBase} aria-label="Go to Team section">
                  Team
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <a
              href="mailto:Osamaalsahafi@outlook.com"
              className="text-gray-300 underline decoration-transparent transition-all hover:decoration-[#FF6A39] focus:outline-none focus:ring-2 focus:ring-[#FF6A39]/60 rounded"
            >
              Osamaalsahafi@outlook.com
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {year} Knowledge Bank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
