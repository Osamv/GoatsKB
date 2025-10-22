import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = useCallback(() => setSidebarOpen((s) => !s), []);

  // نمرر زر القائمة للـ Navbar ليظهر فقط داخل صفحة المقال (Mobile)
  return (
    <Router>
      <div className="min-h-screen bg-[#0f1419]">
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* ArticlePage يدير حالته الخاصة من الـ Sidebar، لذا هذا الـ state فقط لإظهار زر القائمة في الـ Navbar */}
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
