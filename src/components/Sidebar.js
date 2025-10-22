import React from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";

/**
 * Sidebar
 *  - Responsive related-articles sidebar.
 *  - On mobile, overlays the page and can be dismissed by clicking the backdrop or the close button.
 */
const Sidebar = ({ isOpen, onClose, relatedArticles = [], onArticleClick }) => {
  const hasRelated = Array.isArray(relatedArticles) && relatedArticles.length > 0;

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed left-0 top-20 z-50 h-[calc(100vh-5rem)] w-80 transform overflow-y-auto rounded-xl border border-gray-700 bg-[#1D252D] p-6 shadow-2xl transition-all duration-300 lg:sticky ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        aria-label="Related articles sidebar"
        aria-hidden={!isOpen && typeof window !== "undefined" && window.innerWidth < 1024}
      >
        {/* Mobile header */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <h3 className="text-lg font-bold text-white">Related</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF6A39]/60"
            aria-label="Close sidebar"
          >
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        {hasRelated && (
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Related Articles</h3>
            <div className="space-y-3">
              {relatedArticles.map((article) => (
                <button
                  key={article.id}
                  type="button"
                  onClick={() => onArticleClick?.(article)}
                  className="group w-full cursor-pointer rounded-lg p-3 text-left transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6A39]/60"
                  aria-label={`Open related article: ${article.title}`}
                >
                  <p className="line-clamp-2 text-sm font-medium text-gray-300 group-hover:text-[#36454F]">
                    {article.title}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {article.date} • {article.readTime}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  relatedArticles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      date: PropTypes.string,
      readTime: PropTypes.string,
    })
  ),
  onArticleClick: PropTypes.func,
};

export default Sidebar;
