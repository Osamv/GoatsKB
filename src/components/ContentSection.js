import React from "react";

const ContentSection = ({ title, content, items = [] }) => {
  if (!content && (!items || items.length === 0)) return null;

  return (
    <div className="bg-gradient-to-br from-[#36454F] to-[#36454F] rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-center text-2xl font-bold text-white mb-4">{title}</h2>

        {content && (
          <div
            className="text-white leading-relaxed space-y-3"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {items.length > 0 && (
          <ul className="space-y-3 mt-4 list-disc list-inside text-white">
            {items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContentSection;
