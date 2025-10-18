import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, Menu, X, Home, Book, ChevronRight, Calendar, Eye, User, FileText, Clock } from 'lucide-react';

// ==================== DATA LAYER ====================
const ARTICLES_DATA = [
  {
    id: 1,
    title: "Main Balance",
    author: "Osama !",
    date: "Sep 29, 2021",
    lastUpdated: "Oct 4, 2025",
    views: 62750,
    readTime: "5 min read",
    category: "Managing Account",
    tags: ["Using", "Account", "Balance"],
    excerpt: "Learn about the main balance of your Jawwy account and how to manage it effectively.",
    content: {
      definition: "It is the main balance of the .",
      rechargeOptions: [
        "Apple Payk.",
        "Recharge on-behalf of the customer .... (Reminder - Sept. 26th, 2023)"
      ],
      businessRules: [
        "TEST."
      ]
    }
  },
  {
    id: 2,
    title: "Validation Process (Security Questions)",
    author: "System Admin = Osama",
    date: "Oct 4, 2025",
    views: 45200,
    readTime: "3 min read",
    category: "Common Scenarios",
    tags: ["Security", "Validation", "Process"],
    excerpt: "Security validation steps to protect your account and verify your identity.",
    content: {
      definition: "Security validation is a .",
      rechargeOptions: [],
      businessRules: [
        "test.",
       ]
    }
  },
  {
    id: 3,
    title: "Local Data Is Not Working",
    author: "تيم الطربات",
    date: "Oct 4, 2025",
    views: 38900,
    readTime: "4 min read",
    category: "Troubleshooting",
    tags: ["Data", "Technical", "Support"],
    excerpt: "Quick troubleshooting guide for resolving local data connectivity issues.",
    content: {
      definition: "Troubleshooting guide for customers experiencing issues with local data connectivity.",
      rechargeOptions: [],
      businessRules: [
        "test.",
      ]
    }
  },
  {
    id: 4,
    title: "Ownership Transfer",
    author: "تيم خليها على الله ( ابو ليلى و ابو فهد )",
    date: "Feb 15, 2022",
    views: 29400,
    readTime: "6 min read",
    category: "Common Scenarios",
    tags: ["Transfer", "Ownership", "Account"],
    excerpt: "Complete guide to .",
    content: {
      definition: "Process for transferring account ownership .",
      rechargeOptions: [],
      businessRules: [
        "test.",
       ]
    }
  },
  {
    id: 5,
    title: "MSISDN Termination",
    author: "الطربه Team",
    date: "Oct 4, 2025",
    views: 25600,
    readTime: "4 min read",
    category: "Common Scenarios",
    tags: ["Termination", "Number", "Process"],
    excerpt: "Understanding the mobile number termination process and implications.",
    content: {
      definition: "Guide for customers .",
      rechargeOptions: [],
      businessRules: [
        "test.",
       ]
    }
  },
  {
    id: 6,
    title: "Tagging Tree",
    author: "System Admin = Osama",
    date: "Dec 12, 2021",
    views: 22100,
    readTime: "3 min read",
    category: "Goats Systems",
    tags: ["System", "Tags", "Organization"],
    excerpt: "Learn how the tagging system organizes and categorizes knowledge.",
    content: {
      definition: "Overview of the tagging system .",
      rechargeOptions: [],
      businessRules: [
        "Tags must follow standard naming conventions.",

      ]
    }
  }
];

const CATEGORIES = [
  "Common Scenarios", "Services", "Quality Parameters", "Products",
  "Escalated Cases Templates", "Community Related", "App Related",
  "Available Rewards", "Website Related", "SIM Activation",
  "Managing Account", "Cards and Codes", "About us", "Payments",
  "Orders and Deliveries", "Khoros Tags", "Communication Etiquette/Channels",
  "Jawwy Systems", "Troubleshooting"
];

const TEAM_MEMBERS = [
  { id: 1, name: "الطربه", role: "se u", image: "/images/member1.jpg" },
  { id: 2, name: "الخربه", role: "siuu", image: "/images/member2.jpg" },
  { id: 3, name: "الشربه", role: "TS", image: "/images/member3.jpg" },
  { id: 4, name: "الكربه", role: "GOAT", image: "/images/member4.jpg" },
  { id: 5, name: "الطوبه", role: "HR", image: "/images/member5.jpg" },
  { id: 6, name: "الحلبه", role: "FOUT", image: "/images/member6.jpg" }
];

// ==================== COMPONENTS ====================

const Navbar = ({ onHomeClick, onToggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1D252D] shadow-xl' : 'bg-[#1D252D] shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <button onClick={onHomeClick} className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#36454F] to-[#4F008C] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Book className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Knowledge Bank
              </span>
            </button>
            <div className="hidden md:flex space-x-6">
              <button onClick={onHomeClick} className="flex items-center space-x-1 text-gray-300 hover:text-[#FF6A39] transition-colors">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-300 hover:text-[#FF6A39] transition-colors">
                <Book className="w-4 h-4" />
                <span>Knowledge Banks</span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 border-2 border-[#FF6A39] text-[#FF6A39] rounded-lg hover:bg-[#FF6A39] hover:text-white transition-all font-medium">
              عربي
            </button>
            <button className="md:hidden p-2 hover:bg-gray-700 rounded-lg" onClick={onToggleSidebar}>
              <Menu className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ArticleCard = ({ article, onClick }) => (
  <article onClick={onClick} className="bg-[#1D252D] border border-gray-700 rounded-xl shadow-md hover:shadow-2xl hover:border-[#FF6A39] transition-all duration-300 cursor-pointer overflow-hidden group transform hover:-translate-y-1">
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
      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{article.excerpt}</p>
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

const HomePage = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, filteredArticles, onArticleClick }) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#1D252D] to-[#2a333d] rounded-2xl shadow-2xl">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div 
            style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FF6A39] to-[#4F008C] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="relative z-10 px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Goats KB</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Our resource library  ?? is more than enough… the other sites are still trying to catch up</p>
            
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
              <a href="#team" className="text-sm font-semibold leading-6 text-white hover:text-[#FF6A39] transition-colors">
                Meet the Team <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div 
            style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4F008C] to-[#FF6A39] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Team Members Section */}
      <div id="team" className="bg-[#1D252D] border border-gray-700 rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">The Goats</h2>
          <p className="text-gray-400">Meet Our Team</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4F008C] via-[#4F008C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm mb-1">{member.name}</h3>
                    <p className="text-xs text-gray-200">{member.role}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center lg:hidden">
                <h3 className="font-bold text-white text-sm">{member.name}</h3>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#1D252D] border border-gray-700 rounded-xl shadow-2xl p-6">
        <h2 className="text-xl font-bold mb-4 text-white">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORIES.slice(0, 8).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === selectedCategory ? '' : category)}
              className={`p-3 rounded-lg text-left transition-all ${selectedCategory === category ? 'bg-[#36454F] text-white shadow-lg' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}
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
            {selectedCategory || searchQuery ? 'Search Results' : 'Common Articles'}
          </h2>
          {filteredArticles.length > 0 && (
            <span className="text-sm text-gray-400">{filteredArticles.length} articles</span>
          )}
        </div>
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} onClick={() => onArticleClick(article)} />
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

const Sidebar = ({ isOpen, onClose, relatedArticles, onArticleClick }) => (
  <>
    {isOpen && <div className="fixed inset-0 bg-black bg-opacity-70 z-40 lg:hidden" onClick={onClose} />}
    <aside className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-[#1D252D] border border-gray-700 rounded-xl shadow-2xl p-6 overflow-y-auto z-50 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      <div className="flex items-center justify-between mb-6 lg:hidden">
        <h3 className="text-lg font-bold text-white">Related</h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-700 rounded-lg">
          <X className="w-6 h-6 text-gray-400" />
        </button>
      </div>
      {relatedArticles.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Related Articles</h3>
          <div className="space-y-3">
            {relatedArticles.map((article) => (
              <div key={article.id} onClick={() => onArticleClick(article)} className="cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-all group">
                <p className="text-sm font-medium text-gray-300 group-hover:text-[#36454F] line-clamp-2">{article.title}</p>
                <p className="text-xs text-gray-500 mt-1">{article.date} • {article.readTime}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  </>
);

const ContentSection = ({ title, content, items = [] }) => (
  <div className="bg-gradient-to-br from-[#FF6A39] to-[#ff8859] rounded-xl shadow-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      {content && <p className="text-white leading-relaxed">{content}</p>}
      {items.length > 0 && (
        <ul className="space-y-3 mt-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-3 text-white">
              <span className="text-white font-bold mt-1">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const ArticlePage = ({ article, onHomeClick, onArticleClick, sidebarOpen, setSidebarOpen }) => {
  const relatedArticles = useMemo(() => ARTICLES_DATA.filter(a => a.id !== article.id && a.category === article.category).slice(0, 4), [article]);

  return (
    <div className="flex gap-8 relative">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} relatedArticles={relatedArticles} onArticleClick={onArticleClick} />
      <main className="flex-1 max-w-4xl">
        <button onClick={() => setSidebarOpen(true)} className="lg:hidden mb-4 flex items-center space-x-2 text-[#FF6A39] font-medium hover:text-[#ff7d4f]">
          <Menu className="w-5 h-5" />
          <span>Related Articles</span>
        </button>
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
          <button onClick={onHomeClick} className="hover:text-[#FF6A39]">Home</button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#4F008C]">{article.category}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">{article.title}</span>
        </div>
        <div className="bg-gradient-to-r from-[#4F008C] to-[#6a1ab8] rounded-xl shadow-2xl p-8 text-white mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
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
          {article.lastUpdated && <div className="mt-4 text-sm text-purple-200">Last updated: {article.lastUpdated}</div>}
        </div>
        <div className="space-y-6">
          <ContentSection title="Definition" content={article.content.definition} />
          {article.content.rechargeOptions.length > 0 && <ContentSection title="Recharge Options" items={article.content.rechargeOptions} />}
          {article.content.businessRules.length > 0 && <ContentSection title="Business Rules" items={article.content.businessRules} />}
        </div>
        <div className="mt-8 p-6 bg-[#1D252D] border border-gray-700 rounded-xl shadow-2xl">
          <h3 className="text-lg font-bold text-white mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-[#4F008C]/20 border border-[#4F008C]/30 text-[#4F008C] rounded-full text-sm font-medium hover:bg-[#4F008C]/30 transition-all cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-[#1D252D] border-t border-gray-800 text-white mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#FF6A39]">Knowledge Bank</h3>
          <p className="text-gray-400">Your comprehensive resource for information and support.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#FF6A39]">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-[#FF6A39] transition-colors">Home</a></li>
            <li><a href="#articles" className="hover:text-[#FF6A39] transition-colors">Articles</a></li>
            <li><a href="#team" className="hover:text-[#FF6A39] transition-colors">Team</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#FF6A39]">Contact</h3>
          <p className="text-gray-400">osama@goats.com</p>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2025 Goats Bank. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state && e.state.articleId) {
        const article = ARTICLES_DATA.find(a => a.id === e.state.articleId);
        if (article) {
          setSelectedArticle(article);
          setCurrentPage('article');
        }
      } else {
        setCurrentPage('home');
        setSelectedArticle(null);
      }
      setSidebarOpen(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const filteredArticles = useMemo(() => {
    let results = ARTICLES_DATA;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(a => a.title.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q)));
    }
    if (selectedCategory) results = results.filter(a => a.category === selectedCategory);
    return results;
  }, [searchQuery, selectedCategory]);

  const handleArticleClick = useCallback((article) => {
    setSelectedArticle(article);
    setCurrentPage('article');
    setSidebarOpen(false);
    // Add to browser history
    window.history.pushState(
      { articleId: article.id }, 
      '', 
      `#article/${article.id}`
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleHomeClick = useCallback(() => {
    setCurrentPage('home');
    setSelectedArticle(null);
    setSearchQuery('');
    setSelectedCategory('');
    // Update browser history
    window.history.pushState({}, '', '#');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1419]">
      <Navbar onHomeClick={handleHomeClick} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === 'home' ? (
          <HomePage searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} filteredArticles={filteredArticles} onArticleClick={handleArticleClick} />
        ) : (
          <ArticlePage article={selectedArticle} onHomeClick={handleHomeClick} onArticleClick={handleArticleClick} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;