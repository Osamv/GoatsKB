import React from "react";
import { Calendar, Clock, Eye, ChevronRight } from "lucide-react";

const ArticleCard = ({ article, onClick }) => (
  <article
    onClick={onClick}
    className="bg-[#1D252D] border border-gray-700 rounded-xl shadow-md hover:shadow-2xl hover:border-[#FF6A39] transition-all duration-300 cursor-pointer overflow-hidden group transform hover:-translate-y-1"
  >
    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <span className="px-3 py-1 bg-[#4F008C]/20 text-[#4F008C] border border-[#4F008C]/30 rounded-full text-xs font-semibold">
          {article.category}
        </span>
        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#FF6A39] group-hover:translate-x-1 transition-all" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF6A39] transition-colors line-clamp-2">
        {article.title}
      </h3>
      <p className="text-sm text-gray-400 mb-3 line-clamp-2">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Eye className="w-4 h-4" />
          <span>{article.views.toLocaleString()}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {article.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="h-1 bg-gradient-to-r from-[#FF6A39] to-[#4F008C] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </article>
);

export default ArticleCard;
