import React, { useEffect, useState } from "react";
import { Book, Home, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onToggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1D252D] shadow-xl" : "bg-[#1D252D] shadow-md"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#36454F] to-[#4F008C] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Book className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Knowledge Bank</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="flex items-center space-x-1 text-gray-300 hover:text-[#FF6A39] transition-colors">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <span className="flex items-center space-x-1 text-gray-300">
                <Book className="w-4 h-4" />
                <span>Knowledge Banks</span>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#arabic" className="px-4 py-2 border-2 border-[#FF6A39] text-[#FF6A39] rounded-lg hover:bg-[#FF6A39] hover:text-white transition-all font-medium">
              عربي
            </a>
            {location.pathname.startsWith("/article/") && (
              <button className="md:hidden p-2 hover:bg-gray-700 rounded-lg" onClick={onToggleSidebar}>
                <Menu className="w-6 h-6 text-gray-300" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
