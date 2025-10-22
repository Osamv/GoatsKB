import React from "react";
import PropTypes from "prop-types";
import { Calendar, Clock, Eye, ChevronRight } from "lucide-react";

/**
 * ArticleCard
 *  - Displays a concise preview of an article as a clickable card.
 *  - Focusable + keyboard-accessible (Enter/Space trigger onClick).
 *  - Uses semantic <article> and ARIA labels for better accessibility.
 */
const ArticleCard = ({ article, onClick }) => {
  const {
    category,
    title,
    excerpt,
    date,
    readTime,
    views,
    tags = [],
  } = article || {};

  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  const displayTags = Array.isArray(tags) ? tags.slice(0, 3) : [];

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={title ? `Open article: ${title}` : "Open article"}
      className="group cursor-pointer overflow-hidden rounded-xl border border-gray-700 bg-[#1D252D] shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A39] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6A39]/60"
    >
      <div className="p-6">
        {/* Header row: category + chevron */}
        <div className="mb-3 flex items-start justify-between">
          {category && (
            <span className="rounded-full border border-[#4F008C]/30 bg-[#4F008C]/20 px-3 py-1 text-xs font-semibold text-[#4F008C]">
              {category}
            </span>
          )}
          <ChevronRight className="h-5 w-5 translate-x-0 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-[#FF6A39]" />
        </div>

        {/* Title */}
        {title && (
          <h3 className="mb-2 line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-[#FF6A39]">
            {title}
          </h3>
        )}

        {/* Excerpt */}
        {excerpt && (
          <p className="mb-3 line-clamp-2 text-sm text-gray-400">
            {excerpt}
          </p>
        )}

        {/* Meta row */}
        <div className="mb-3 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-3">
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
            )}
            {readTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{typeof views === "number" ? views.toLocaleString() : "--"}</span>
          </div>
        </div>

        {/* Tags */}
        {displayTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {displayTags.map((tag) => (
              <span
                key={String(tag)}
                className="rounded px-2 py-1 text-xs text-gray-300 ring-1 ring-inset ring-gray-700"
              >
                {String(tag)}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover underline accent */}
      <div className="origin-left h-1 scale-x-0 bg-gradient-to-r from-[#FF6A39] to-[#4F008C] transition-transform group-hover:scale-x-100" />
    </article>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    category: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    date: PropTypes.string,
    readTime: PropTypes.string,
    views: PropTypes.number,
    tags: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  }).isRequired,
  onClick: PropTypes.func,
};

export default ArticleCard;
