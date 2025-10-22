import React from "react";
import PropTypes from "prop-types";

/**
 * ContentSection
 *  - Displays a titled section with optional HTML content and/or a list of items.
 *  - If both `content` and `items` are empty, renders null.
 *  - NOTE: `content` supports HTML via `dangerouslySetInnerHTML`. Ensure the HTML is sanitized upstream.
 */
const ContentSection = ({ title, content, items = [] }) => {
  const hasContent = Boolean(content) || (Array.isArray(items) && items.length > 0);
  if (!hasContent) return null;

  return (
    <section
      aria-label={title || "Content section"}
      className="overflow-hidden rounded-xl bg-[#36454F] shadow-lg"
    >
      <div className="p-6">
        {title && (
          <h2 className="mb-4 text-center text-2xl font-bold text-white">
            {title}
          </h2>
        )}

        {content && (
          <div
            className="space-y-3 leading-relaxed text-white"
            // Ensure `content` is sanitized before passing here.
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {Array.isArray(items) && items.length > 0 && (
          <ul className="mt-4 list-inside list-disc space-y-3 text-white">
            {items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

ContentSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string, // HTML string; sanitize upstream
  items: PropTypes.arrayOf(PropTypes.node),
};

export default ContentSection;
