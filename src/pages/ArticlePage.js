import React, { useMemo, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, Eye, User, ChevronRight, Menu } from "lucide-react";
import ARTICLES_DATA from "../data/ArticlesData";
import Sidebar from "../components/Sidebar";
import ContentSection from "../components/ContentSection";

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const article = useMemo(
    () => ARTICLES_DATA.find((a) => String(a.id) === String(id)),
    [id]
  );

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return ARTICLES_DATA.filter(
      (a) => a.id !== article.id && a.category === article.category
    ).slice(0, 4);
  }, [article]);






  const onArticleClick = useCallback(
    (a) => {
      navigate(`/article/${a.id}`);
      setSidebarOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  if (!article) {
    return (
      <div className="text-white">
        <p className="mb-4">Article not found.</p>
        <button
          onClick={() => navigate("/")}
          className="text-[#FF6A39] underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-8 relative">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        relatedArticles={relatedArticles}
        onArticleClick={onArticleClick}
      />
      <main className="flex-1 max-w-4xl">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden mb-4 flex items-center space-x-2 text-[#FF6A39] font-medium hover:text-[#ff7d4f]"
        >
          <Menu className="w-5 h-5" />
          <span>Related Articles</span>
        </button>

        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
          <button
            onClick={() => navigate("/")}
            className="hover:text-[#FF6A39]"
          >
            Home
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#4F008C]">{article.category}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">{article.title}</span>
        </div>

        <div className="bg-gradient-to-r from-[#4F008C] to-[#6a1ab8] rounded-xl shadow-2xl p-8 text-white mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-purple-100">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>{article.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          {article.lastUpdated && (
            <div className="mt-4 text-sm text-purple-200">
              Last updated: {article.lastUpdated}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <ContentSection
            title="Definition"
            content={article.content.definition}
          />

          {article.content.rechargeOptions?.length > 0 && (
            <ContentSection
              title="Recharge Options"
              items={article.content.rechargeOptions}
            />
          )}

          {article.content?.businessRules && (
            <details className="group bg-[#1D252D] border border-gray-700 rounded-xl shadow-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none px-5 py-4 hover:bg-gray-800/60 transition-colors">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Business Rules
                </h3>
                <ChevronRight className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-90 group-open:text-[#FF6A39]" />
              </summary>
              <div
                className="px-5 pb-5 text-white leading-relaxed space-y-3"
                dangerouslySetInnerHTML={{
                  __html: article.content.businessRules,
                }}
              />
            </details>
          )}

          {article.content?.notabletorecharge && (
            <div className="space-y-6 mt-6">
              <ContentSection
                title="Not able to recharge (Using Credit/ Mada)"
                content={article.content.notabletorecharge}
              />
            </div>
          )}

          {article.content?.notabletorechargem && (
            <div className="space-y-6 mt-6">
              <ContentSection
                title="Not able to recharge (Using Sawa Card)"
                content={article.content.notabletorechargem}
              />
            </div>
          )}

          {article.content?.jawwybalance && (
            <div className="space-y-6 mt-6">
              <ContentSection
                title="Jawwy Main Balance transfer Request"
                content={article.content.jawwybalance}
              />
            </div>
          )}

          {article.content?.stcbalance && (
            <div className="space-y-6 mt-6">
              <ContentSection
                title="STC Balance transfer"
                content={article.content.stcbalance}
              />
            </div>
          )}

          {article.content?.rechargerefund && (
            <div className="space-y-6 mt-6">
              <ContentSection
                title="Recharge Refund"
                content={article.content.rechargerefund}
              />
            </div>
          )}


           {article.content?.ImportantNotes && (
            <div className="space-y-6 mt-6">
              <ContentSection
                title="Important Notes"
                content={article.content.ImportantNotes}
              />
            </div>
          )}




          <div className="mt-8 p-6 bg-[#1D252D] border border-gray-700 rounded-xl shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#4F008C]/20 border border-[#4F008C]/30 text-[#4F008C] rounded-full text-sm font-medium hover:bg-[#4F008C]/30 transition-all cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;
