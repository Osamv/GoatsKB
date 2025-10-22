import React from "react";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, onClose, relatedArticles, onArticleClick }) => (
  <>
    {isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-40 lg:hidden" onClick={onClose} />
    )}
    <aside
      className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-[#1D252D] border border-gray-700 rounded-xl shadow-2xl p-6 overflow-y-auto z-50 transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex items-center justify-between mb-6 lg:hidden">
        <h3 className="text-lg font-bold text-white">Related</h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-700 rounded-lg">
          <X className="w-6 h-6 text-gray-400" />
        </button>
      </div>
      {relatedArticles?.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Related Articles</h3>
          <div className="space-y-3">
            {relatedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onArticleClick(article)}
                className="cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-all group"
              >
                <p className="text-sm font-medium text-gray-300 group-hover:text-[#36454F] line-clamp-2">
                  {article.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {article.date} • {article.readTime}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  </>
);

export default Sidebar;
