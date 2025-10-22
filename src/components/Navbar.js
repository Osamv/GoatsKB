import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Book, Home, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

/**
 * Navbar
 *  - Sticky top navigation with brand, links, and optional sidebar toggle on article pages.
 *  - Changes elevation on scroll for visual feedback.
 */
const Navbar = ({ onToggleSidebar }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isArticleRoute = location.pathname.startsWith("/article/");

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1D252D] shadow-xl" : "bg-[#1D252D] shadow-md"
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand + Primary links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="group flex items-center gap-2" aria-label="Go to Home">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#36454F] to-[#4F008C] transition-transform group-hover:scale-110">
                <Book className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Goats KB</span>
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              <Link
                to="/"
                className="flex items-center gap-1 text-gray-300 transition-colors hover:text-[#FF6A39] focus:outline-none focus:ring-2 focus:ring-[#FF6A39]/60 rounded"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>

              <span className="flex items-center gap-1 text-gray-300">
                <Book className="h-4 w-4" />
                <span>Account</span>
              </span>
            </div>
          </div>

          {/* Sidebar toggle (mobile on article pages) */}
          {isArticleRoute && (
            <button
              type="button"
              className="rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF6A39]/60 md:hidden"
              onClick={onToggleSidebar}
              aria-label="Toggle related articles sidebar"
            >
              <Menu className="h-6 w-6 text-gray-300" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onToggleSidebar: PropTypes.func,
};

export default Navbar;
