import React from "react";

const Footer = () => (
  <footer className="bg-[#1D252D] border-t border-gray-800 text-white mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#00000]">Knowledge Bank</h3>
          <p className="text-gray-400">Your comprehensive resource for information and support.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#00000]">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-[#00000] transition-colors">Home</a></li>
            <li><a href="#articles" className="hover:text-[#00000] transition-colors">Articles</a></li>
            
            <li><a href="#team" className="hover:text-[#00000] transition-colors">Team</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#00000]">Contact</h3>
          <a href="mailto:Osamaalsahafi@outlook.com" className="text-gray-400">Osamaalsahafi@outlook.com</a>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2025 Knowledge Bank. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
