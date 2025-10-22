import React from "react";
import PropTypes from "prop-types";

/**
 * SplitSection
 *  - Two-column content block (left/right) with optional titles, HTML content, and list items.
 *  - If both sides are empty, renders null.
 *  - NOTE: `content` supports HTML via `dangerouslySetInnerHTML`. Ensure the HTML is sanitized upstream.
 */
const SplitSection = ({ left = {}, right = {} }) => {
  const renderBlock = ({ title, content, items = [] }) => {
    const hasContent = Boolean(content) || (Array.isArray(items) && items.length > 0);
    if (!hasContent) return null;

    return (
      <div>
        {title && <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>}

        {content && (
          <div
            className="space-y-3 leading-relaxed text-white"
            // Ensure `content` is sanitized before passing here.
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {Array.isArray(items) && items.length > 0 && (
          <ul className="mt-3 list-inside list-disc space-y-2 text-white">
            {items.map((it, i) => (
              <li key={i} className="leading-relaxed">
                {it}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const leftHas = Boolean(left?.content) || (Array.isArray(left?.items) && left.items.length > 0);
  const rightHas = Boolean(right?.content) || (Array.isArray(right?.items) && right.items.length > 0);

  if (!leftHas && !rightHas) return null;

  return (
    <section className="overflow-hidden rounded-xl bg-[#36454F] shadow-lg">
      <div className="p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>{renderBlock(left)}</div>
          <div className="md:border-l md:border-gray-700 md:pl-6">{renderBlock(right)}</div>
        </div>
      </div>
    </section>
  );
};

SplitSection.propTypes = {
  left: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string, // HTML string; sanitize upstream
    items: PropTypes.arrayOf(PropTypes.node),
  }),
  right: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string, // HTML string; sanitize upstream
    items: PropTypes.arrayOf(PropTypes.node),
  }),
};

export default SplitSection;
