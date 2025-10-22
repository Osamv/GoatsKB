import React from "react";

const SplitSection = ({ left = {}, right = {} }) => {
  const renderBlock = ({ title, content, items = [] }) => {
    if (!content && (!items || items.length === 0)) return null;
    return (
      <div>
        {title && <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>}
        {content && (
          <div
            className="text-white leading-relaxed space-y-3"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
        {items?.length > 0 && (
          <ul className="space-y-2 mt-3 list-disc list-inside text-white">
            {items.map((it, i) => (
              <li key={i} className="leading-relaxed">{it}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  if ((!left.content && (!left.items || left.items.length === 0)) &&
      (!right.content && (!right.items || right.items.length === 0))) return null;

  return (
    <div className="bg-gradient-to-br from-[#36454F] to-[#36454F] rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>{renderBlock(left)}</div>
          <div className="md:border-l md:border-gray-700 md:pl-6">{renderBlock(right)}</div>
        </div>
      </div>
    </div>
  );
};

export default SplitSection;
