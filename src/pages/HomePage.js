import React, { useMemo, useState, useCallback } from "react";
import { Book, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import ARTICLES_DATA from "../data/ArticlesData";
import { CATEGORIES } from "../utils/categories";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const filteredArticles = useMemo(() => {
    let results = ARTICLES_DATA;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (selectedCategory) results = results.filter((a) => a.category === selectedCategory);
    return results;
  }, [searchQuery, selectedCategory]);

  const handleArticleClick = useCallback((article) => {
    navigate(`/article/${article.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#1D252D] to-[#2a333d] rounded-2xl shadow-2xl">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FF6A39] to-[#4F008C] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="relative z-10 px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Goats KB</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our resource library ?? is more than enough… the other sites are still trying to catch up
            </p>

            <div className="mt-10 flex gap-4 max-w-3xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-600 bg-[#1D252D]/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-[#FF6A39] focus:border-[#FF6A39] transition-all text-lg"
                />
              </div>
              <button className="px-8 py-4 bg-[#36454F] text-white rounded-lg font-semibold hover:bg-[#ff7d4f] transition-all shadow-lg">
                Search
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#articles" className="rounded-md bg-[#36454F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#ff7d4f] transition-all">
                Browse Articles
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4F008C] to-[#FF6A39] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#1D252D] border border-gray-700 rounded-xl shadow-2xl p-6">
        <h2 className="text-xl font-bold mb-4 text-white">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORIES.slice(0, 8).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === selectedCategory ? "" : category)}
              className={`p-3 rounded-lg text-left transition-all ${
                selectedCategory === category ? "bg-[#36454F] text-white shadow-lg" : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              <span className="font-medium text-sm">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div id="articles">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            {selectedCategory || searchQuery ? "Search Results" : "Common Articles"}
          </h2>
          {filteredArticles.length > 0 && (
            <span className="text-sm text-gray-400">{filteredArticles.length} articles</span>
          )}
        </div>
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} onClick={() => handleArticleClick(article)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#1D252D] border border-gray-700 rounded-xl shadow-2xl">
            <Book className="w-20 h-20 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
